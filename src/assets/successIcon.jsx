import React from "react";

const SuccessIcon = ({ width = 150, height = 150 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 150 150"
      fill="none"
    >
      <path
        d="M56.25 127.625L17.4375 88.8125L35.125 71.125L56.25 92.3125L118 30.5L135.687 48.1875L56.25 127.625Z"
        fill="black"
      />
    </svg>
  );
};

export default SuccessIcon;
