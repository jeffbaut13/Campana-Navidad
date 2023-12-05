import React, { useRef } from "react";
import Figure from "./Figure";

const Header = () => {
  const imagenRef = useRef();
  return (
    <div className="Amentti blurs fixed z-50 w-full h-20  px-8">
      <nav className="flex justify-between items-center w-full h-full border-b-[1px] border-w border-[--mainColorText]">
        <div className="h-full">
          <Figure imagenRef={imagenRef} imgSrc={"/prospero-blanco.svg"} />
        </div>
        <ul className="nav h-full flex items-center">
          <li className="line active">CAJA</li>
          <li className="line">
            La entrega <br /> de David
          </li>
          <li className="line"> La Carta</li>
          <li className="line">
            Novena <br />y cuento
          </li>
          <li className="line">
            Momentos de <br />
            entrega
          </li>
          <li className="ml-12">
            Apoya a <br />
            la fundación
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
