import { Model } from "./casa";
import { OrbitControls, PerspectiveCamera, Ring } from "@react-three/drei";
import { useEffect } from "react";
import { Ground } from "./Ground";
import { gsap } from "gsap";
import { handleButtonClick } from "../config/gsapOrbits";
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
} from "@react-three/postprocessing";
import { Car } from "./Carro";
import { BlendFunction } from "postprocessing";

export const CarShow = ({ orbitControlsRef, cilindro, camara }) => {
  const cuerpo = {
    target: [1, 0, -2],
  };
  useEffect(() => {
    camara.current.position.x = 2;
    camara.current.position.y = 1;
    camara.current.position.z = 1.5;
    cilindro.current.rotation.y = 2.1;
  }, []);

  return (
    <>
      <OrbitControls
        enableZoom={true}
        enableRotate={true}
        enablePan={true}
        ref={orbitControlsRef}
        target={[0, 0.35, 0]}
        maxPolarAngle={1.45}
      />

      <PerspectiveCamera makeDefault fov={50} ref={camara} />

      <color args={[0, 0, 0]} attach="background" />

      <Model cilindro={cilindro} />

      <Ground />
      <spotLight
        color={"#ffffff"}
        intensity={90}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.01}
      />
      <spotLight
        color={"#ffffff"}
        intensity={80}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 5]}
        castShadow
        shadow-bias={-0.01}
      />

      {/* <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={0.2} // The bloom intensity.
          width={300} // render width
          height={300} // render height
          kernelSize={5} // blur kernel size
          luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
      </EffectComposer> */}
    </>
  );
};
