import { useState } from "react";

function Nombres() {
  const [nombreDato, setNombreDato] = useState("");
  const [mostrarValor, setMostrarValor] = useState("");

  const mostrarNombre = (evento) => {
    setNombreDato(evento.target.value);
  };
  const MostrarValor = () => {
    setMostrarValor(nombreDato);
  };

  return (
    <div>
      <h2 className="titulo">Nombre</h2>
      <section className="contenedor">
        <div>
          <input
            className="texto"
            type="text"
            placeholder="nombre"
            value={nombreDato}
            onChange={mostrarNombre}
          />
        </div>

        <button className="boton" onClick={MostrarValor}>
          Mostrar nombre
        </button>

        <p className="textoP">{mostrarValor}</p>
      </section>
    </div>
  );
}

export default Nombres;
