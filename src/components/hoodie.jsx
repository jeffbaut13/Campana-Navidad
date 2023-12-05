import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/modelo3d/hoodieBlend--9.glb");
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="capucha-left"
          castShadow
          receiveShadow
          geometry={nodes["capucha-left"].geometry}
          material={materials.texturaPrinc}
        />
        <mesh
          name="cordones"
          castShadow
          receiveShadow
          geometry={nodes.cordones.geometry}
          material={materials["material-Cordones"]}
        />
        <mesh
          name="cuerpo"
          castShadow
          receiveShadow
          geometry={nodes.cuerpo.geometry}
          material={materials.texturaPrinc}
        />
        <mesh
          name="mangas"
          castShadow
          receiveShadow
          geometry={nodes.mangas.geometry}
          material={materials.texturaPrinc}
        />
        <mesh
          name="Pretina"
          castShadow
          receiveShadow
          geometry={nodes.Pretina.geometry}
          material={materials.texturaPrinc}
        />
        <mesh
          name="punos"
          castShadow
          receiveShadow
          geometry={nodes.punos.geometry}
          material={materials.texturaPrinc}
        />
        <mesh
          name="capucha-right"
          castShadow
          receiveShadow
          geometry={nodes["capucha-right"].geometry}
          material={materials.texturaPrinc}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/modelo3d/hoodieBlend.glb");
