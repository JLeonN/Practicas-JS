import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  const sumaContador = () => {
    setContador(contador + 1);
  };
  const restaContador = () => {
    setContador(contador - 1);
  };

  return (
    <>
      <h2 className="titulo">Contador de Clics</h2>
      <section className="contenedor">
        <p className="textoSimple">{contador}</p>
        <div>
          <button className="boton" onClick={sumaContador}>
            Sumar
          </button>
          <button className="boton" onClick={restaContador}>
            Restar
          </button>
        </div>
      </section>
    </>
  );
}

export default Contador;
