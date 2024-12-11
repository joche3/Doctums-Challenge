import * as React from "react";

const TexBoxBig3 = ({ fillColor1 = "#DEA100", fillColor2 = "#B78400", children, ...props }) => (
  <div style={{ position: 'relative', width: '697.998px', height: '800.233px' }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={697.998}
      height={800.233}
      viewBox="0 0 170 195"
      {...props}
    >
      <path
        d="M24 0h146v171h-3v3h-3v3h-3v3h-3v3h-3v3h-3v3h-3v3h-3v3H0V24h3v-3h3v-3h3v-3h3v-3h3V9h3V6h3V3h3V0Z"
        data-name="Forma 1"
        style={{
          fillRule: "evenodd",
          fill: fillColor1,
        }}
      />
      <path
        d="M30 3h100v3H33v3h-3v3h-3v3h-3v3h-3v3h-3v3h-3v3H9v-3h3v-3h3v-3h3v-3h3v-3h3V9h3V6h3V3Z"
        data-name="Forma 2"
        style={{
          fill: fillColor2,
          fillRule: "evenodd",
        }}
      />
    </svg>
    <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', color: '#fff', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '37px' , paddingRight: '37px', boxSizing: 'border-box' }}>
      {children} {/* Aquí se renderiza el contenido adicional */}
    </div>
  </div>
);

export default TexBoxBig3;