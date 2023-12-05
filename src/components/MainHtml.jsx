import React, { useEffect, useRef } from "react";
import TextoBienvenida from "./TextoBienvenida";
import BotonRegistro from "./BotonRegistro";
import gsap from "gsap";
import Registro from "./Registro";
import BtnClose from "./BtnClose";
import { actividades } from "../data/actividades.json";
import Figure from "./Figure";

const MainHtml = ({
  ejecutarVista,
  ejecutarInicio,
  showCaja,
  setOpenImg,
  openImg,
}) => {
  const imagenRef = useRef(null);

  const actividad = {
    id: "",
    titulo: "",
    descripcion: "",
    imagen: "",
    concurrencia: "",
    zona: "",
  };

  useEffect(() => {
    gsap.to(".showAgendar", {
      duration: 2,
      opacity: 1,
      delay: 1,
    });
  }, [showCaja, openImg]);

  useEffect(() => {
    if (openImg !== 0) {
      gsap.to(".galeria", {
        duration: 1,
        y: 0,
        opacity: 1,
        delay: 0.2,
      });
    }
  }, [openImg]);

  useEffect(() => {
    if (openImg !== 0) {
      gsap.fromTo(
        imagenRef.current,
        { opacity: 0, y: 20 },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: "power3.out",
        }
      );
    }
  }, [openImg, actividad.imagen]);

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
  const ejecutarEfectosCamara = () => {
    ejecutarVista();
    setOpenImg(0);
  };
  return (
    <div className={`absolute z-10 w-full h-full`}>
      <div className="flex h-full w-full">
        {showCaja && (
          <>
            <div className="w-1/2"></div>
            {openImg !== 0 && (
              <div className="galeria opacity-0 w-1/2 translate-y-4 flexCenterC h-full ">
                <div ref={imagenRef} className="imagenEfecto ">
                  <div className="relative w-full h-2/5">
                    <BtnClose close={ejecutarEfectosCamara} />
                    <Figure
                      customclas={"p-4 borderWhite"}
                      imgSrc={actividad.imagen}
                    />
                  </div>
                  <h3 className="text-sm tracking-[7px] uppercase mt-8 mb-4">
                    {actividad.zona} - {actividad.concurrencia}
                  </h3>
                  <hr className="opacity-40" />
                  <h3 className="text-4xl tracking-[14px] uppercase my-4">
                    {actividad.titulo}
                  </h3>
                  <p className="text-start text-sm tracking-[7px]">
                    {actividad.descripcion}
                  </p>
                  <BotonRegistro />
                </div>
              </div>
            )}
            {openImg === 0 && <Registro />}
          </>
        )}
      </div>
    </div>
  );
};

export default MainHtml;
