import { useRef } from "react";
import LineMesh from "./Lineas";

const Puntos = ({ showCaja, setOpenImg }) => {
  const lineRefUno = useRef();
  const lineRefDos = useRef();
  const lineRefTres = useRef();
  const lineRefCuatro = useRef();
  const lineRefCinco = useRef();
  const lineRefSeis = useRef();
  const lineRefSiete = useRef();

  const activarImg = (Num) => {
    setOpenImg(Num);
  };

  return (
    <>
      <LineMesh
        lineRef={lineRefDos}
        delay={0.9}
        showCaja={showCaja}
        coordenadas={[1.5, 1.5, 1]}
        Event={() => activarImg(2)}
        posicionY={1.5}
      />
      <LineMesh
        lineRef={lineRefCuatro}
        delay={0.6}
        showCaja={showCaja}
        coordenadas={[0.6, 1.5, 1.5]}
        Event={() => activarImg(1)}
        posicionY={1.5}
      />
      <LineMesh
        lineRef={lineRefSeis}
        delay={0.3}
        showCaja={showCaja}
        coordenadas={[0, 2, 0.5]}
        Event={() => activarImg(3)}
      />

      <LineMesh
        lineRef={lineRefTres}
        delay={0.7}
        showCaja={showCaja}
        coordenadas={[-0.5, 2, 0.1]}
        Event={() => activarImg(4)}
      />
      <LineMesh
        lineRef={lineRefCinco}
        delay={0.2}
        showCaja={showCaja}
        coordenadas={[0, 2, -0.1]}
        Event={() => activarImg(5)}
      />
      <LineMesh
        lineRef={lineRefUno}
        delay={0.1}
        showCaja={showCaja}
        coordenadas={[-1, 2, -0.8]}
        Event={() => activarImg(6)}
      />
      <LineMesh
        lineRef={lineRefSiete}
        delay={1}
        showCaja={showCaja}
        coordenadas={[0.1, 2, -0.6]}
        Event={() => activarImg(7)}
      />
    </>
  );
};

export default Puntos;
