import React from "react";
import MainButton from "./MainButton";

const BotonRegistro = ({ ejecutarVista }) => {
  return (
    <>
      <div className="flexCenterR w-full">
        <MainButton
          HandleClick={ejecutarVista}
          cusClasses={"text-sm"}
          titulo={"REGÍSTRATE"}
        />
      </div>
    </>
  );
};

export default BotonRegistro;
