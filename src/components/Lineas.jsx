import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useLayoutEffect, useState } from "react";

import {
  BufferGeometry,
  BufferAttribute,
  Line,
  LineBasicMaterial,
} from "three";
import { gsap } from "gsap";

const LineMesh = ({
  coordenadas,
  Event,
  showCaja,
  lineRef,
  delay,
  colorActive,
  posicionY,
}) => {
  const spanRef = useRef();
  const [active, setActive] = useState(false);
  const [activeClass, setActiveClass] = useState(false);

  useEffect(() => {
    if (showCaja && lineRef.current) {
      setActive(true);
      lineRef.current.position.set(
        coordenadas[0],
        coordenadas[1] - (posicionY ? posicionY : 0.7),
        coordenadas[2]
      );

      gsap.from(lineRef.current.position, {
        duration: 1,
        y: posicionY ? -posicionY : -0.7,
        ease: "power1.out",
        delay,
      });
    } else {
      setActive(false);
    }
  }, [showCaja]);

  useEffect(() => {
    if (active && spanRef.current) {
      gsap.to(".efectoPunto", {
        opacity: 1,
        duration: 0.5,
        delay: delay + 0.5,
      });
    }
  }, [active]);

  const startPoint = new Float32Array([0, 0, 0]);
  const endPoint = new Float32Array([0, posicionY ? posicionY : 0.7, 0]);

  const geometry = new BufferGeometry();
  geometry.setAttribute(
    "position",
    new BufferAttribute(new Float32Array([...startPoint, ...endPoint]), 3)
  );

  const material = new LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.4,
  });

  return (
    <>
      {showCaja && (
        <>
          <line ref={lineRef} geometry={geometry} material={material} />

          <Html ref={spanRef} position={coordenadas}>
            <span
              onClick={() => {
                Event();
                setActiveClass(true);
              }}
              className={`${
                activeClass ? "active" : "bg-white"
              }  efectoPunto opacity-0`}
            ></span>
          </Html>
        </>
      )}
    </>
  );
};

export default LineMesh;
