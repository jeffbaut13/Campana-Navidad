import React from "react";
import BotonRegistro from "./BotonRegistro";

const Registro = ({ ejecutarVista }) => {
  return (
    <div className="showAgendar galeria opacity-0 w-1/2 h-full flexCenterC ">
      <h1 className="">
        DESCUBRE EL ENCANTO DE ENTREGAR ALEGRÍA
        <br />
        ESTA NAVIDAD
      </h1>
      <h2 className="colorTextoClaro">
        <span className="text-center flexCenterC">
          ROVANIEMI COBRA VIDA EN <br />
          NUESTRA CAJA MÁGICA NAVIDEÑA
          <br />
          DEL 6 AL 26 DE DICIEMBRE
        </span>
      </h2>
      <a target="_blank" href="https://maps.app.goo.gl/ZCqWmoPn1gJPNVLi7">
        <img src="/mapa.svg" alt="" />
      </a>

      <h2 className="colorTextoClaro">
        <span className="text-center flexCenterC">
          ESTAMOS EN LA PLAZOLETA DE LA <br /> CALLE 85 CON CARRERA 15 EN BOGOTÁ
        </span>
      </h2>
      <BotonRegistro ejecutarVista={ejecutarVista} />
    </div>
  );
};

export default Registro;
