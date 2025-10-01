export default function IconFullScreen({
  className,
  ...rest
}: {
  className?: string;
}) {
  return (
    <div
      className={`${className} relative after:z-10 after:block after:h-full after:w-full after:rounded-full after:bg-black after:opacity-50 after:content-['']`}
      {...rest}
    >
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">
        <path
          d="M0,0h35.55v14.26H14.26v21.29H0V0z M64.45,0v14.26h21.29v21.29H100V0H64.45z M14.26,64.45H0V100h35.55V85.74H14.26V64.45z
	 M85.74,85.74H64.45V100H100V64.45H85.74V85.74z"
        />
      </svg>
    </div>
  );
}
