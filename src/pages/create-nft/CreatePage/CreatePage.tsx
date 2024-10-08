import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreatePage.module.scss";
import Instruction from "../../../shared/Instruction/Instruction";
import ProgressBar from "./ProgressBar/ProgressBar";
import Navigation from "../../../shared/Navigation/Navigation";
import Upload from "./Upload/Upload";
import Submit from "./Submit/Submit";
import SubmitModal from "./SubmitModal/SumbitModal";
import { mintNFT, createItem } from "../../../apis/api";
import { useMutation } from "react-query";
import MissionUpdate from "../../../shared/MissionUpdate/MissionUpdate";

const TEXT = [
  {
    title: "Now, let’ experience as a creator and make an awesome t-shirt!",
    text: "Design your own t-shirt.",
  },
  {
    title: "Whoa! Almost there",
    text: "Now, your costume is minted as NFT, and you have rights to sell the costume. How much do you want to sell your costume on the Avatar Costume Shop?",
  },
];

type Info = {
  price: string | null;
  name: string | null;
};

function validateFile(file: string) {
  if (file.length == 0) return { error: "Please create a costume!" };

  return {};
}

function validateFields(info: Info) {
  if (!info.name) return { error: "Please enter a valid NFT name!" };
  if (!info.price || !Number(info.price))
    return { error: "Please enter a valid price!" };

  return {};
}

export default function CreatePage() {
  //////workaround code for google translate bug
  if (typeof Node === "function" && Node.prototype) {
    const originalRemoveChild = Node.prototype.removeChild;
    Node.prototype.removeChild = function <T extends Node>(child: T): T {
      if (child.parentNode !== this) {
        if (console) {
          console.warn(
            "Cannot remove a child from a different parent",
            child,
            this
          );
        }
        return child;
      }
      return originalRemoveChild.apply(this, [child]) as T;
    };

    const originalInsertBefore = Node.prototype.insertBefore;
    Node.prototype.insertBefore = function <T extends Node>(
      newNode: T,
      referenceNode: Node | null
    ): T {
      if (referenceNode && referenceNode.parentNode !== this) {
        if (console) {
          console.warn(
            "Cannot insert before a reference node from a different parent",
            referenceNode,
            this
          );
        }
        return newNode;
      }
      return originalInsertBefore.apply(this, [newNode, referenceNode]) as T;
    };
  }
  ///////

  const isLoaded =
    typeof window !== "undefined" && typeof window.Module !== "undefined";

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [navOnHover, setNavOnHover] = useState(false);

  const [file, setFile] = useState<string>("");
  const [info, setInfo] = useState<Info>({
    price: null,
    name: null,
  });

  const [useSample, setUseSample] = useState(false);
  const [sample, setSample] = useState(2);

  const { mutate } = useMutation(
    (args: { thumbnail: string; sample?: number }) =>
      mintNFT(args.thumbnail, args.sample),
    {
      onSuccess: () => {
        setStep(2);
      },
      onError: () => {
        setStep(2.5);
      },
    }
  );

  const navigate = useNavigate();
  const instruction = step < 3 ? TEXT[0] : TEXT[1];

  function handleUseSample(value: boolean) {
    setUseSample(value);
  }

  function handleSample(value?: number) {
    if (value) setSample(value);
    else setSample((prev) => (prev + 1) % 3);
  }

  function handleFile(file: string) {
    setFile(file);
  }

  function handleInfo(field: string, value: string) {
    setInfo((prev) => {
      let updated = { ...prev };
      if (field === "name") updated.name = value;
      else if (field === "price") updated.price = value;

      return updated;
    });
  }

  function handleStep(currStep?: number) {
    setStep((prev) => {
      if (currStep != undefined) {
        return currStep;
      } else return prev + 1;
    });
  }

  function handleNavigate(dir: string) {
    if (dir === "next")
      setStep((prev) => {
        return prev + 1;
      });
    else {
      if (step === 3) setStep(0);
      else
        setStep((prev) => {
          return prev - 1;
        });
    }
  }

  function handleClose() {
    setOpen(false);
  }

  function handleNavHover(value: boolean) {
    setNavOnHover(value);
  }

  useEffect(() => {
    if (step < 0) navigate(-1);
    if (step === 0) {
      setFile("");
      setUseSample(false);
      setSample(2);
    }
    if (step === 1) {
      const errorMsg = validateFile(file).error;
      if (errorMsg) {
        alert(errorMsg);
        setStep(0);
        // setOpen(false);
      } else {
        const mint = async () => {
          setOpen(true);
          const thumbnail = isLoaded ? Module.OVDR_Thumbnails?.main.url : file;
          const args = {
            thumbnail: thumbnail,
            sample: useSample ? sample : undefined,
          };
          mutate(args);
        };

        mint();
      }
    }
    if (step === 4) {
      const errorMsg = validateFields(info).error;
      if (errorMsg) {
        alert(errorMsg);
        setStep(3);
      } else {
        const create = async () => {
          const final = {
            name: info.name,
            price: parseInt(info.price || "", 10),
          };
          const thumbnail = isLoaded ? Module.OVDR_Thumbnails?.main.url : file;
          await createItem(final, thumbnail, file);
          sessionStorage.setItem("mission", "2");
          navigate("/demo/costume-shop/new-item");
        };

        create();
      }
    }
  }, [step]);

  return (
    <MissionUpdate updatedMission={1}>
      <div className="flex flex-col m-auto max-w-full">
        {open && (
          <SubmitModal
            step={step}
            open={open}
            handleClose={handleClose}
            handleStep={handleStep}
          />
        )}
        <div className="flex flex-row justify-center items-center gap-4 min-h-[7rem]">
          <Instruction
            title={instruction.title}
            typeWriter={instruction.text}
          />
          <span>
            <Navigation handleClick={() => handleNavigate("next")} />
          </span>
        </div>
        {/* <ProgressBar step={step} /> */}
        <div className="p-6 mt-[5vh]">
          <Navigation
            handleClick={() => handleNavigate("back")}
            isBackwards={true}
          />
          {step < 3 ? (
            <Upload
              file={file}
              handleFile={handleFile}
              sample={sample}
              handleSample={handleSample}
              useSample={useSample}
              handleUseSample={handleUseSample}
            />
          ) : (
            <Submit info={info} handleInfo={handleInfo} />
          )}
          <div
            className="flex m-[auto_0] p-[0.3rem] bg-transparent transition-none max-w-[2rem] hover:border-none"
            onClick={() => handleNavigate("next")}
            onMouseEnter={() => {
              handleNavHover(true);
            }}
            onMouseLeave={() => {
              handleNavHover(false);
            }}
          >
            {navOnHover && (
              <h3 className="z-[3000] text-center bg-[#FFA300] text-white whitespace-nowrap p-[0.2rem_0.5rem] rounded-[0.5rem_1rem_1rem_0.5rem] animate-[scaleUp_0.03s_ease-in-out] hover:cursor-pointer">
                {step === 0 && "Mint"}
                {step === 3 && "Save"} &gt;&gt;
              </h3>
            )}
            {!navOnHover && <Navigation />}
          </div>
        </div>
      </div>
    </MissionUpdate>
  );
}
