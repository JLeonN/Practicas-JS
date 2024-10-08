import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  const sumaContador = () => {
    setContador(contador + 1);
  };
  const restaContador = () => {
    setContador(contador - 1);
  };
  const resetContador = () => {
    setContador(0);
  };

  return (
    <>
      <h2 className="titulo">Contador de Clics</h2>
      <section className="contenedor">
        <p className="textoP">{contador}</p>
        <div>
          <button className="boton" onClick={sumaContador}>
            Sumar
          </button>
          <button className="boton" onClick={restaContador}>
            Restar
          </button><button className="boton" onClick={resetContador}>
            Resetear
          </button>
        </div>
      </section>
    </>
  );
}

export default Contador;
