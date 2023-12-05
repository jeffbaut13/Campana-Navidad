import { Canvas } from "@react-three/fiber";

import { useEffect, useRef, useState } from "react";

import {
  handleButtonClick,
  camaraInicial,
  rotateCilindro,
} from "../config/gsapOrbits";
import MainHtml from "./MainHtml";
import Puntos from "./Puntos";
import { CarShow } from "./Escena";

export default function Opcion1() {
  const orbitControlsRef = useRef();
  const cilindro = useRef();
  const camara = useRef();
  const rotationAnimation = useRef(null);

  const [showCaja, setShowCaja] = useState(false);
  const [openImg, setOpenImg] = useState(0);

  useEffect(() => {
    window.onload = function () {
      setTimeout(() => {
        ejecutarVista();
      }, 1000);
    };
  }, []);

  const cuerpo = {
    target: [1, 0, -2],
  };

  const MovPuntoCinco = {
    target: [2.7, 1.9, -0.1],
  };
  const MovPuntoTre = {
    target: [2.7, 1.9, -0.1],
  };
  const MovPuntoUno = {
    target: [2, 0.7, 0],
  };
  const MovPuntoDos = {
    target: [1.8, 1, 1],
  };

  useEffect(() => {
    if (openImg == 1) {
      handleButtonClick(orbitControlsRef, MovPuntoUno);
      rotateCilindro(camara, cilindro, rotationAnimation, 4.3, 1, 1.2);
    }
    if (openImg == 2) {
      handleButtonClick(orbitControlsRef, MovPuntoDos);
      rotateCilindro(camara, cilindro, rotationAnimation, 2, 1, 4);
    }
    if (openImg == 3 || openImg == 5 || openImg == 7) {
      handleButtonClick(orbitControlsRef, MovPuntoCinco);
      rotateCilindro(camara, cilindro, rotationAnimation, 4, 2.8, 0.8);
    }
    if (openImg == 4 || openImg == 6) {
      handleButtonClick(orbitControlsRef, MovPuntoTre);
      rotateCilindro(camara, cilindro, rotationAnimation, 4, 2.6, 0.7);
    }
  }, [openImg]);

  const ejecutarVista = () => {
    handleButtonClick(orbitControlsRef, cuerpo);
    rotateCilindro(camara, cilindro, rotationAnimation);
    setShowCaja(true);
  };

  const ejecutarInicio = () => {
    setShowCaja(false);
    camaraInicial(camara);
    handleButtonClick(orbitControlsRef, inicio);
  };
  return (
    <div className="relative w-full h-full">
      <MainHtml
        showCaja={showCaja}
        setOpenImg={setOpenImg}
        ejecutarVista={ejecutarVista}
        ejecutarInicio={ejecutarInicio}
        openImg={openImg}
      />
      <Canvas shadows>
        <Puntos showCaja={showCaja} openImg={openImg} setOpenImg={setOpenImg} />

        <CarShow
          orbitControlsRef={orbitControlsRef}
          cilindro={cilindro}
          camara={camara}
          rotationAnimation={rotationAnimation}
        />
      </Canvas>
    </div>
  );
}
