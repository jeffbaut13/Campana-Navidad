import { gsap } from "gsap";

export const handleButtonClick = (orbitControlsRef, parte) => {
  if (orbitControlsRef.current) {
    gsap.to(orbitControlsRef.current.target, {
      x: parte.target[0],
      y: parte.target[1],
      z: parte.target[2],
      duration: 2,
      ease: "power1.inOut",
      delay: parte.delay ? parte.delay : 0,
      onUpdate: orbitControlsRef.current.update,
    });
  }
};

export const camaraInicial = (camara, X, Y, Z) => {
  if (camara.current) {
    gsap.to(camara.current.position, {
      duration: 2, // Duración de la animación en segundos
      x: X ? X : 5,
      y: Y ? Y : 3,
      z: Z ? Z : 2,
      ease: "power1.inOut", // Tipo de suavizado de la animación
    });
  }
};

export const rotateCilindro = (
  camara,
  cilindro,
  rotationAnimation,
  X,
  Y,
  Z
) => {
  if (camara.current) {
    gsap.to(camara.current.position, {
      duration: 2, // Duración de la animación en segundos
      x: X ? X : 5,
      y: Y ? Y : 3,
      z: Z ? Z : 2,
      delay: 0.1,
      // Tipo de suavizado de la animación
    });
  }
  if (cilindro.current) {
    gsap.to(cilindro.current.rotation, {
      duration: 2, // Duración de la animación en segundos
      y: 2.3, // Rotación completa alrededor del eje Y
      ease: "power1.inOut", // Tipo de suavizado de la animación
      delay: 0,
    });
  }
  if (rotationAnimation.current) {
    rotationAnimation.current.kill(); // Detener la animación inicial si existe
  }
};

export const rotacionInicial = (cilindro, rotationAnimation) => {
  if (cilindro.current) {
    rotationAnimation.current = gsap.to(cilindro.current.rotation, {
      duration: 30,
      y: Math.PI,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
  }
};
