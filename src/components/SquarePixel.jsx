import * as React from "react";

const SquarePixel = ({ fillColor1 = "#fff", fillColor2 = "#888", fillColor3 = "#202020", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={70}
    viewBox="0 0 140 140"
    {...props}
  >
    <path
      d="M15 5h110v5h5v5h5v110h-5v5h-5v5H15v-5h-5v-5H5V15h5v-5h5V5Z"
      style={{
        fillRule: "evenodd",
        fill: fillColor1, // Color del primer path
      }}
    />
    <path
      d="M15 5h92v5H20v5h-5v5h-5v79H5V15h5v-5h5V5Z"
      style={{
        fill: fillColor2, // Color del segundo path
        fillRule: "evenodd",
      }}
    />
    <path
      d="M10 0h120v5h5v5h5v120h-5v5h-5v5H10v-5H5v-5H0V10h5V5h5V0Zm5 5v5h-5v5H5v110h5v5h5v5h110v-5h5v-5h5V15h-5v-5h-5V5H15Z"
      data-name="Forma 1"
      style={{
        fillRule: "evenodd",
        fill: fillColor3, // Color del tercer path
      }}
    />
  </svg>
);

export default SquarePixel;