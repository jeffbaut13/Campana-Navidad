import React, { useEffect, useRef, useState } from "react";
import Figure from "./Figure";
import { actividades } from "../data/actividades.json";
import MainButton from "./MainButton";
import gsap from "gsap";

const Opcion2 = () => {
  const [slideActividad, setSlideActividad] = useState(0);
  const imagenRef = useRef(null);
  const contenedorRef = useRef(null);
  const actividad = {
    id: "",
    titulo: "",
    descripcion: "",
    imagen: "",
    concurrencia: "",
    zona: "",
  };
  actividades.map((activ) => {
    if (slideActividad == activ.id) {
      actividad.id = activ.id;
      actividad.titulo = activ.titulo;
      actividad.descripcion = activ.descripcion;
      actividad.imagen = activ.imagen;
      actividad.concurrencia = activ.concurrencia;
      actividad.zona = activ.zona;
    }
  });
  useEffect(() => {
    if (slideActividad !== 0) {
      gsap.fromTo(
        imagenRef.current,
        { opacity: 0, x: -250, scale: 1.5 },
        {
          duration: 1, // Duración de las propiedades que no son scale
          opacity: 1,
          x: 0,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        imagenRef.current,
        { scale: 1.5 }, // Estado inicial de la escala
        {
          duration: 30, // Duración para la escala
          scale: 1, // Estado final de la escala
          ease: "power3.out",
        }
      );
    }
  }, [slideActividad, actividad.imagen]);

  useEffect(() => {
    if (slideActividad != 0) {
      gsap.fromTo(
        contenedorRef.current.children,
        {
          opacity: 0,
          x: 50,
        },
        {
          duration: 0.5,
          opacity: 1,
          x: 0,
          ease: "power3.out",
          stagger: {
            each: 0.2,
            from: "start",
          },
        }
      );
    }
  }, [slideActividad]);

  return (
    <div className="w-full h-full">
      <div className="flexCenterR w-full h-full">
        <div className="bg-black w-1/2 h-full relative">
          <div
            ref={imagenRef}
            className="absolute gradienteTransparente z-10 w-full h-full"
          ></div>
          {slideActividad == 0 && <Figure imgSrc={"/front.jpg"} />}
          {slideActividad !== 0 && (
            <Figure imagenRef={imagenRef} imgSrc={actividad.imagen} />
          )}
        </div>
        <div
          ref={contenedorRef}
          className="w-1/2 bg-black h-full relative flex flex-col justify-center"
        >
          {slideActividad == 0 ? (
            <>
              <h1 className="colorTextoClaro text-start mb-8">
                <span className="Tusker block text-9xl tracking-[8px] uppercase">
                  Descubre el encanto
                </span>
                <span className="subtitle text-lg tracking-[14px] w-full">
                  de entregar alegría esta Navidad
                </span>
              </h1>
              <div className="flexCenterR">
                <MainButton
                  HandleClick={() => setSlideActividad(1)}
                  cusClasses={"text-sm w-2/4"}
                  titulo={"VER ITINERARIO"}
                />
              </div>
            </>
          ) : (
            <>
              <span className="Amentti block text-xs text-white tracking-[8px] uppercase">
                {actividad.zona} -- {actividad.concurrencia}
              </span>
              <h2 className="colorTextoClaro text-start mb-8">
                <span className="Amentti block text-6xl tracking-[8px] uppercase">
                  {actividad.titulo}
                </span>
              </h2>
              <p className="text-white text-start text-sm tracking-[7px] mb-8">
                {actividad.descripcion}
              </p>
              <div className="">
                <span
                  onClick={() => {
                    slideActividad < 7
                      ? setSlideActividad(slideActividad + 1)
                      : setSlideActividad(1);
                  }}
                  className={`p-2 border border-[--mainColorText]  text-white cursor-pointer flex items-center justify-between w-[150px] h-[50px]`}
                >
                  Siguiente
                  <svg
                    id="uuid-56c841c8-2008-4f46-995e-0aad2e7abe73"
                    data-name="Capa 1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 50 50"
                  >
                    <path
                      className="colorTextoClaro"
                      d="m40.43,27.94h-1.21c-11.89,0-23.79,0-35.68,0-.49,0-.99-.02-1.45-.16-1.37-.41-2.22-1.72-2.06-3.11.15-1.42,1.32-2.53,2.77-2.62.31-.02.61,0,.92,0,11.83,0,23.67,0,35.5,0h1.22c-.28-.34-.46-.56-.64-.77-3.52-3.98-7.05-7.96-10.58-11.94-.83-.93-1.11-1.98-.69-3.15.76-2.12,3.44-2.58,5.03-.83,1.96,2.16,3.88,4.36,5.82,6.55,3.18,3.59,6.36,7.18,9.54,10.77,1.44,1.63,1.45,3.03,0,4.65-5.09,5.75-10.19,11.5-15.29,17.25-1.06,1.2-2.47,1.48-3.73.81-1.18-.63-1.83-1.95-1.46-3.27.16-.56.51-1.12.9-1.57,3.44-3.93,6.92-7.83,10.38-11.74.2-.22.39-.46.71-.85Z"
                    />
                  </svg>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Opcion2;
