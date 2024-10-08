import clsx from 'clsx';

type DemoButtonProps = {
  children: React.ReactNode;
  filled: boolean;
  handleClick?: () => void;
  className?: string;
};

export default function DemoButton({
  children,
  filled,
  handleClick,
  className,
}: DemoButtonProps): React.ReactElement {
  return (
    <button
      onClick={handleClick}
      type="button"
      className={clsx(`font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ${
        filled
          ? "text-white bg-[#1ABF5D]"
          : "text-[#1ABF5D] border border-[#1ABF5D] bg-transparent"
      }`, className)}
    >
      {children}
    </button>
  );
}
