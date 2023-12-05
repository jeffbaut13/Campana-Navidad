import React from "react";

const BtnClose = ({ close }) => {
  return (
    <span onClick={close} className="close">
      <svg id="svgCerrar" data-name="Capa 2" viewBox="0 0 14.02 14.02">
        <g id="Capa_1-2" data-name="Capa 1">
          <g>
            <line
              className="colorTextoClaro"
              x1=".39"
              y1=".39"
              x2="13.63"
              y2="13.63"
            />
            <line
              className="colorTextoClaro"
              x1=".39"
              y1="13.63"
              x2="13.63"
              y2=".39"
            />
          </g>
        </g>
      </svg>
    </span>
  );
};

export default BtnClose;
