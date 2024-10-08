import navBackSymbol from "../../public/svg/navBack.svg";
import { useNavigate } from "react-router-dom";

type PropType = {
  path?: string;
  handleClick?: (...args: any[]) => any;
  isBackwards?: boolean;
};

export default function Navigation({
  path,
  handleClick,
  isBackwards,
}: PropType): React.ReactElement {
  const navigate = useNavigate();
  const handleNavigate =
    handleClick ||
    function () {
      if (path) navigate(path);
    };

  return (
    <div
      onClick={handleNavigate}
      className={`w-[6rem] min-w-[2.5rem] h-[2.3rem] m-auto my-0 bg-[#1ABF5D] flex justify-center items-center ${isBackwards ? "border border-[#C8C8C8] bg-transparent" : ""} rounded`}
    >
      {isBackwards ? (
        <img src={navBackSymbol} alt="nav" />
      ) : (
        <p className="text-white">Next</p>
      )}
    </div>
  );
}
