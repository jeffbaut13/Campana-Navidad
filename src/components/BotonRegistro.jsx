import React from "react";
import MainButton from "./MainButton";

const BotonRegistro = () => {
  const handleClick = () => {
    window.open("https://entregamagica.com/formulario/r/", "_blank");
  };
  return (
    <>
      <div className="flexCenterR w-full">
        <MainButton
          HandleClick={handleClick}
          cusClasses={"text-sm"}
          titulo={"REGÍSTRATE"}
        />
      </div>
    </>
  );
};

export default BotonRegistro;
