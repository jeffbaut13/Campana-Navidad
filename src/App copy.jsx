import { Canvas, useFrame } from "@react-three/fiber";
import { Model } from "./components/casa";
import { Center, OrbitControls, Html } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { handleButtonClick } from "./config/gsapOrbits";

export default function App() {
  const orbitControlsRef = useRef();
  const cilindro = useRef();

  const rotateCilindro = (Num) => {
    gsap.to(cilindro.current.rotation, {
      duration: 2, // Duración de la animación en segundos
      y: Num, // Rotación completa alrededor del eje Y
      ease: "power1.inOut", // Tipo de suavizado de la animación
    });
  };

  const cuerpo = {
    position: [0, -20, 80],
    target: [0, 0, 0],
    zoom: 1,
  };

  const inicial = {
    position: [15, 0, 40],
    target: [0, 0, 0],
    zoom: 1,
  };

  const inicial2 = {
    position: [40, 0, 60],
    target: [0, 0, 0],
    zoom: 1,
  };

  const inicial3 = {
    position: [-10, 0, -30],
    target: [0, 0, 0],
    zoom: 1,
  };
  const inicial4 = {
    position: [60, 0, -50],
    target: [0, 0, 0],
    zoom: 1,
  };
  const inicial5 = {
    position: [30, 0, 30],
    target: [0, 0, 0],
    zoom: 1,
  };

  const principio = {
    position: [2, 1, -10],
    target: [0, 0, 0],
    zoom: 1,
  };

  const Cuerpo = () => {
    rotateCilindro(1);
  };
  const efecto0 = () => {
    rotateCilindro(2);
  };
  const efecto1 = () => {
    rotateCilindro(3);
  };

  const efecto2 = () => {
    rotateCilindro(4);
  };
  const efecto3 = () => {
    rotateCilindro(5);
  };
  const efecto4 = () => {
    rotateCilindro(6);
  };

  const inicio = () => {
    rotateCilindro(0);
  };

  return (
    <div className=" w-screen h-screen">
      <div className="flex w-full max-w-screen-lg justify-between">
        <button onClick={inicio}>Inicio</button>
        <button onClick={Cuerpo}>cuerpo</button>
        <button onClick={efecto0}>efecto0</button>
        <button onClick={efecto1}>efecto1</button>
        <button onClick={efecto2}>efecto2</button>
        <button onClick={efecto3}>efecto3</button>
        <button onClick={efecto4}>efecto4</button>
      </div>
      <Canvas shadows camera={{ position: [2, 1, -10], fov: 45 }}>
        <ambientLight intensity={4} />
        <spotLight
          color={[1, 0.25, 0.7]}
          intensity={1005}
          angle={0.6}
          penumbra={0.5}
          position={[20, 1, 0]}
          castShadow
          shadow-bias={-0.0001}
        />
        <spotLight
          color={[0.14, 0.5, 1]}
          intensity={2000}
          angle={0.6}
          penumbra={0.5}
          position={[-20, 2, -10]}
          castShadow
          shadow-bias={-0.0001}
        />
        {/* <directionalLight
          intensity={1000}
          color={"#004ce5"}
          position={[1, 2, 0]}
        /> */}
        <OrbitControls
          ref={orbitControlsRef}
          /* enableZoom={false} // Deshabilitar el zoom
          enableRotate={false} // Deshabilitar la rotación
          enablePan={false} // Deshabilitar el cambio de posición */
        />

        <Center>
          <Model cilindro={cilindro} />
        </Center>
      </Canvas>
    </div>
  );
}
