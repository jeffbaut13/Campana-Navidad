import React from "react";
import { useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";
import { MeshReflectorMaterial } from "@react-three/drei";

export function Ground() {
  const roughnessTexture = useTexture("/textures/terrain-roughness.jpg");
  const normalTexture = useTexture("/textures/terrain-normal.jpg");
  const baseTexture = useTexture("/textures/terrain-base.jpg");

  // Manipulación de texturas
  roughnessTexture.wrapS = roughnessTexture.wrapT = RepeatWrapping;
  roughnessTexture.repeat.set(5, 5);

  normalTexture.wrapS = normalTexture.wrapT = RepeatWrapping;
  normalTexture.repeat.set(5, 5);
  const R = 0.25274509804;
  const G = 0.25274509804;
  const B = 0.25274509804;

  /* const R = 0.55274509804;
  const G = 0.55274509804;
  const B = 0.8274509804; */
  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        envMapIntensity={0}
        normalMap={normalTexture}
        normalScale={[0.01, 0.01]}
        roughnessMap={roughnessTexture}
        dithering={true}
        color={[R, G, B]}
        blur={[500, 200]}
        mixBlur={30}
        mixStrength={70}
        mixContrast={1.02}
        resolution={1024}
        mirror={0}
        depthScale={0.01}
        minDepthThreshold={0.9}
        maxDepthThreshold={1}
        depthToBlurRatioBias={0.04}
        debug={0}
        reflectorOffset={0.2}
      />
    </mesh>
  );
}
