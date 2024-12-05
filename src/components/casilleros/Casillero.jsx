import * as React from "react";

const Casillero = ({ color = "#FFE59F", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={55}
    viewBox="0 0 50 50"
    {...props}
  >
    <defs>
      <style>{".cls-2{fill-rule:evenodd}"}</style>
    </defs>
    <path
      id="Forma_1"
      d="M4 2h44v44h-2v2H2V4h2V2Z"
      data-name="Forma 1"
      style={{
        fill: color, // Usa el color recibido por la prop
        stroke: "#000000",
        strokeWidth: 2,
        fillRule: "evenodd",
      }}
    />
    <path id="lineTop" d="M2 0h46v2H4v2H2V0Z" className="cls-2" />
    <path id="lineBottom" d="M46 46h2v4H2v-2h44v-2Z" className="cls-2" />
    <path id="lineRight" d="M48 0h2v50h-2z" />
    <path id="lineLeft" d="M0 2h2v48H0z" />
  </svg>
);

export default Casillero;