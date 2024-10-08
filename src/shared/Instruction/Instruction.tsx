import { ReactTyped } from "react-typed";

type PropType = {
  title: string;
  typeWriter: string;
  onComplete?: () => void;
  style?: string;
};

export default function Instruction({
  title,
  style,
  typeWriter,
  onComplete,
}: PropType): React.ReactElement {
  return (
    <div
      className={`p-[1rem_0rem] text-left self-center w-[70vw] min-h-[6rem] border-l-[6px] border-l-[#10B981] ${style}`}
    >
      <div className="ml-6">
        <p className="text-2xl font-[Manrope] font-bold text-left leading-[33.6px]">
          {title}
        </p>
        <ReactTyped
          strings={[typeWriter]}
          className="text-base font-[Manrope] font-normal text-left leading-[19.2px]"
          typeSpeed={0.000000001}
          onComplete={onComplete || function () {}}
        />
      </div>
    </div>
  );
}
