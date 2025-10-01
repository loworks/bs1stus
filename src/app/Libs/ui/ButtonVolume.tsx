/* eslint-disable react/display-name */
import React, { useRef } from "react";

export default function ButtonVolume({
  className = "",
  clickHandler,
  ...rest
}: {
  className?: string;
  clickHandler: Function;
} & React.ComponentProps<"div">) {
  const volumeBtn = useRef(null);
  return (
    <div
      ref={volumeBtn}
      className="button-volume top:0 relative inline-block h-[25px] w-[25px] cursor-pointer rounded-full  [&.volume-on_.volume-off-btn]:invisible [&.volume-on_.volume-on-btn]:visible"
      {...rest}
      onClick={(event) => {
        volumeBtn.current.classList.toggle("volume-on");

        if (clickHandler) clickHandler();
        event.stopPropagation();

        return false;
      }}
    >
      <svg
        className="volume-on-btn invisible absolute top-0"
        viewBox="0 0 20 20"
        preserveAspectRatio="xMinYMin meet"
      >
        <g id="icon-volume">
          <path
            d="M9.91,1.88v16.25c0,0.63-0.77,0.95-1.21,0.5L4.87,14.8c-0.14-0.14-0.32-0.21-0.51-0.21l-2.58,0.03
	c-0.4,0.01-0.72-0.31-0.72-0.71V5.6c0-0.39,0.32-0.71,0.71-0.71h3.11c0.19,0,0.37-0.07,0.5-0.21L8.7,1.37
	C9.15,0.93,9.91,1.24,9.91,1.88z M18.93,10c0-2.76-0.88-5.21-2.43-6.93c-0.43-0.48-1.18-0.52-1.66-0.08
	c-0.48,0.43-0.52,1.18-0.08,1.66c1.1,1.21,1.83,3.1,1.83,5.36v0.19c0,2.26-0.73,4.15-1.83,5.36c-0.43,0.48-0.4,1.22,0.08,1.66
	c0.48,0.43,1.22,0.4,1.66-0.08l0,0c1.55-1.72,2.43-4.18,2.43-6.93V10z M15.34,10.07V9.93c0-2.05-0.78-3.9-2.12-5.16
	c-0.47-0.44-1.21-0.42-1.66,0.05s-0.42,1.21,0.05,1.66c0.84,0.79,1.38,1.99,1.38,3.46v0.13c0,1.46-0.54,2.66-1.38,3.46
	c-0.47,0.44-0.49,1.19-0.05,1.66c0.44,0.47,1.19,0.49,1.66,0.05l0,0C14.56,13.96,15.34,12.12,15.34,10.07z"
          />
        </g>
      </svg>

      <svg
        className="volume-off-btn visible absolute top-0"
        viewBox="0 0 20 20"
        preserveAspectRatio="xMinYMin meet"
      >
        <g id="icon-volumeoff">
          <path
            d="M16.5,3.07c1.55,1.72,2.43,4.18,2.43,6.93v0.19c0,2.34-0.66,4.43-1.8,6.07l0.9,0.91
	c0.46,0.46,0.45,1.2-0.01,1.66c-0.46,0.45-1.2,0.45-1.66-0.01L0.94,3.21c-0.45-0.46-0.45-1.2,0.01-1.66C1.41,1.1,2.15,1.1,2.61,1.56
	l2.93,2.97L8.7,1.37c0.45-0.45,1.21-0.13,1.21,0.5v7.08l2.8,2.83c0.18-0.52,0.29-1.09,0.29-1.72V9.93c0-1.46-0.54-2.66-1.38-3.46
	c-0.47-0.44-0.49-1.19-0.05-1.66c0.44-0.47,1.19-0.49,1.66-0.05c1.34,1.26,2.12,3.11,2.12,5.16v0.13c0,1.28-0.31,2.47-0.87,3.5
	l1,1.01c0.69-1.16,1.12-2.66,1.12-4.39V10c0-2.26-0.73-4.15-1.83-5.36c-0.43-0.48-0.4-1.22,0.08-1.66
	C15.33,2.55,16.07,2.59,16.5,3.07z M1.07,13.92c0,0.4,0.32,0.72,0.72,0.71l2.58-0.03c0.19,0,0.38,0.07,0.51,0.21l3.83,3.83
	c0.45,0.45,1.21,0.13,1.21-0.5v-3.49L1.07,5.6V13.92z"
          />
        </g>
      </svg>
    </div>
  );
}
