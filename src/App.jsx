import { Suspense } from "react";

import Opcion1 from "./components/Opcion1";
import Opcion2 from "./components/Opcion2";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Carta from "./components/Carta";
import Novena from "./components/Novena";
import Gallery from "./components/Gallery";
import Division from "./components/Division";
import ActividadesMobile from "./components/ActividadesMobile";
import Footer from "./components/Footer";

export default function App() {
  const isTablet = window.innerWidth <= 1260 && window.innerWidth >= 600;
  const isMobile = window.innerWidth <= 600;

  return (
    <Suspense fallback={null}>
      <Header isTablet={isTablet} isMobile={isMobile} />
      <Inicio videoId="66Log7IODoE" isTablet={isTablet} isMobile={isMobile}/>
      {isMobile || isTablet ? <ActividadesMobile/> : <Opcion1 />}
      <Division />
      <Carta />
      <Novena />
      <Gallery />
      <Footer/>
    </Suspense>
  );
}
