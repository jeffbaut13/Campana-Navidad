import React from "react";
import MainButton from "./MainButton";

const TextoBienvenida = ({ ejecutarVista, cusClasses }) => {
  return (
    <div
      className={`${cusClasses} flex flex-col h-full items-center justify-center m-auto`}
    >
      <h1 className="colorTextoClaro text-center">
        <span className="Tusker block text-6xl tracking-[8px] uppercase">
          Descubre el encanto de entregar alegría esta Navidad.
        </span>
        <span className="subtitle text-lg tracking-[14px]">
          Navega por nuestra caja inspirada en la mágica villa de Rovaniemi,
          donde cada rincón cuenta una historia de generosidad y amor.
        </span>
      </h1>

      <MainButton
        cusClasses={"text-sm"}
        HandleClick={ejecutarVista}
        titulo={"VER ITINERARIO"}
      />
    </div>
  );
};

export default TextoBienvenida;
