import React from "react";
import BotonRegistro from "./BotonRegistro";

const Registro = ({ ejecutarVista }) => {
  return (
    <div className="showAgendar galeria opacity-0 w-1/2 h-full flexCenterC ">
      <h1>
        Descubre el encanto de entregar
        <br />
        alegría esta navidad
      </h1>
      <h2 className="colorTextoClaro">
        <span className="text-center flexCenterC">
          Rovaniemi cobra vida en <br />
          nuestra caja mágica navideña
          <br />
          del 6 al 26 de diciembre
        </span>
      </h2>
      <p className="text-center mb-6">
        Programa tu visita <br /> a un mundo de maravillas
      </p>
      <a target="_blank" href="https://maps.app.goo.gl/ZCqWmoPn1gJPNVLi7">
        <img src="/iconos/mapa.svg" alt="" />
      </a>

      <h2 className="colorTextoClaro">
        <span className="text-center flexCenterC">
          Estamos en la plazoleta de la <br /> calle 85 con carrera 15 en Bogotá
        </span>
      </h2>
      <BotonRegistro />
    </div>
  );
};

export default Registro;
