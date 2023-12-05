const Novena = () => {
  const handleDownload = () => {
    // Puedes cambiar 'ruta/al/archivo.pdf' con la ruta correcta de tu archivo PDF.
    const pdfFilePath = "ruta/al/archivo.pdf";

    // Crea un elemento 'a' (enlace) y configúralo para descargar el archivo.
    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.download = "nombre_del_archivo.pdf";

    // Simula el clic en el enlace para iniciar la descarga.
    document.body.appendChild(link);
    link.click();

    // Limpia el enlace después de la descarga.
    document.body.removeChild(link);
  };

  return (
    <div className=" bnovena">
      <div className="flex flex-col h-full justify-between text-center">
        <p className=" pt-10">
          Extiende la magia de entregar: Descarga nuestra novena especial y un
          cuento navideño para compartir el espíritu de entregar en familia
        </p>
        <div className=" flex flex-col">
          <div className="w-full h-[50px] gradienteTransparente"></div>
          <div className="flex-col justify-center text-center text-[#e2d599] bg-black">
            <p className=" my-4">
              Prepara tu hogar para una navidad inolvidable
            </p>
            {/* Agrega el evento onClick para manejar la descarga */}
            <button
              onClick={handleDownload}
              className="custonBtn tracking-[15px] text-sm"
            >
              DESCARGA AQUÍ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novena;
