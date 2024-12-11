import * as React from "react";

const Button = ({ colorTop = "#ffca3f", colorBottom = "#ffbd0f", dotColor = "#000", lineColor = "#000", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={199.98}
    height={78.78}
    viewBox="0 0 1320 520"
    {...props}
  >
    <defs>
      <style>{".cls-3{fill-rule:evenodd}"}</style>
    </defs>
    <path
      id="color-bottom"
      d="M40 239h1240v201h-40v40H80v-40H40V239Z"
      style={{
        fillRule: "evenodd",
        fill: colorBottom,
      }}
    />
    <path
      id="color-top"
      d="M80 40h1160v40h40v161H40V80h40V40Z"
      style={{
        fill: colorTop,
        fillRule: "evenodd",
      }}
    />
    <path id="dot-top-right" d="M1240 40h40v40h-40V40Z" style={{ fill: dotColor }} />
    <path id="dot-bottom-right" d="M1240 440h40v40h-40v-40Z" style={{ fill: dotColor }} />
    <path id="dot-bottom-left" d="M40 440h40v40H40v-40Z" style={{ fill: dotColor }} />
    <path id="dot-top-left" d="M40 40h40v40H40V40Z" style={{ fill: dotColor }} />
    <path id="line-left" d="M1280 80h40v360h-40V80Z" style={{ fill: lineColor }} />
    <path id="line-bottom" d="M80 480h1160v40H80v-40Z" style={{ fill: lineColor }} />
    <path id="line-right" d="M0 80h40v360H0V80Z" style={{ fill: lineColor }} />
    <path id="line-top" d="M80 0h1160v40H80V0Z" style={{ fill: lineColor }} />
  </svg>
);

export default Button;