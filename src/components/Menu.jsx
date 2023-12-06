import React from "react";
import { handleClick } from "../config/Anclas";
const Menu = ({ linesRef }) => {
  return (
    <ul className="nav h-full flex max-xl:flex-col items-center justify-center">
      <li
        ref={(el) => (linesRef.current[0] = el)}
        onClick={() => handleClick("inicio")}
        className="line active"
      >
        La entrega <br /> de David
      </li>
      <li
        ref={(el) => (linesRef.current[1] = el)}
        onClick={() => handleClick("caja")}
        className="line"
      >
        Caja
      </li>
      <li
        ref={(el) => (linesRef.current[2] = el)}
        onClick={() => handleClick("carta")}
        className="line"
      >
        {" "}
        La Carta
      </li>
      <li
        ref={(el) => (linesRef.current[3] = el)}
        onClick={() => handleClick("novena")}
        className="line"
      >
        Novena <br />y cuento
      </li>
      <li
        ref={(el) => (linesRef.current[4] = el)}
        onClick={() => handleClick("momentos")}
        className="xl:ml-12 cursor-pointer"
      >
        Momentos de <br />
        entrega
      </li>
      {/* <li ref={(el) => (linesRef.current[5] = el)} className="xl:ml-12">
        Apoya a <br />
        la fundación
      </li> */}
    </ul>
  );
};

export default Menu;
