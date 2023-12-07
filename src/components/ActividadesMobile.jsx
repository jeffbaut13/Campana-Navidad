import React, { useState } from "react";
import { actividades } from "../data/actividades.json";
import BotonRegistro from "./BotonRegistro";
import Figure from "./Figure";
import BtnClose from "./BtnClose";
import Registro from "./Registro";
import MainButton from "./MainButton";

const ActividadesMobile = () => {
  const [openImg, setOpenImg] = useState(0);
  const actividad = {
    id: "",
    titulo: "",
    descripcion: "",
    imagen: "",
    concurrencia: "",
    zona: "",
  };

  actividades.map((activ) => {
    if (openImg === activ.id) {
      actividad.id = activ.id;
      actividad.titulo = activ.titulo;
      actividad.descripcion = activ.descripcion;
      actividad.imagen = activ.imagen;
      actividad.concurrencia = activ.concurrencia;
      actividad.zona = activ.zona;
    }
  });
  const AbrirActividades = () => {
    setOpenImg(1);
  };

  const CerrarActividades = () => {
    setOpenImg(0);
  };
  console.log(openImg);
  return (
    <div className={`z-10 w-full h-full relative`}>
      {openImg !== 0 && (
        <div className="galeria w-full flexCenterC h-full px-8">
          <span
            className="absolute right-0 top-1/2 translate-y-[-50%]"
            onClick={() => {
              openImg == 7 ? setOpenImg(1) : setOpenImg(openImg + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 6L17 12L7 18"
                stroke="#e2d599"
                stroke-width="2"
                fill="none"
              />
            </svg>
          </span>
          <span
            className="absolute left-0 top-1/2 translate-y-[-50%] rotate-180"
            onClick={() => {
              openImg == 1 ? setOpenImg(7) : setOpenImg(openImg - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 6L17 12L7 18"
                stroke="#e2d599"
                stroke-width="2"
                fill="none"
              />
            </svg>
          </span>
          <div className="imagenEfecto ">
            <div className="relative w-full">
              <BtnClose close={CerrarActividades} />
              <Figure
                customclas={"p-4 borderWhite"}
                imgSrc={actividad.imagen}
              />
            </div>
            <h3 className="xl:text-sm xs:text-xs tracking-[7px] uppercase mt-8 mb-4">
              {actividad.zona} - {actividad.concurrencia}
            </h3>

            <h3 className="xl:text-4xl xs:text-sm tracking-[7px] colorTextoClaro uppercase my-4">
              {actividad.titulo}
            </h3>
            <p className="mb-6 text-start font-light text-white xl:text-sm xs:text-[10px] tracking-[7px]">
              {actividad.descripcion}
            </p>
            <BotonRegistro />
          </div>
        </div>
      )}
      {openImg === 0 && (
        <div className="showAgendar galeria w-full h-full flex flex-col justify-start items-center ">
          <Figure
            customclas={"w-full h-full"}
            imgSrc={"/imagenes/imagen-Render.jpg"}
          />
          <h1 className="mt-6">
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
          <h2 className="colorTextoClaro text-center m-0 mb-6">
            Programa tu visita <br /> a un mundo de maravillas
          </h2>
          <div className="px-4">
            <BotonRegistro />
            <MainButton
              HandleClick={AbrirActividades}
              cusClasses={"text-sm mt-4"}
              titulo={"VER ACTIVIDADES"}
            />
          </div>
          <a
            className="mt-6"
            target="_blank"
            href="https://maps.app.goo.gl/ZCqWmoPn1gJPNVLi7"
          >
            <img src="/iconos/mapa.svg" alt="" />
          </a>

          <h2 className="colorTextoClaro">
            <span className="text-center flexCenterC">
              Estamos en la plazoleta de la <br /> calle 85 con carrera 15 en
              Bogotá
            </span>
          </h2>
        </div>
      )}
    </div>
  );
};

export default ActividadesMobile;
