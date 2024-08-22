import React, { useState } from "react";

function Buscador({ nombres }) {
  const [nombreSeleccionado, setNombreSeleccionado] = useState(); // Para el Selector

  const buscando = (evento) => {
    console.log("Valor buscado:", evento.target.value);
    setNombreSeleccionado(evento.target.value);
  };

  return (
    <>
      <h2 className="titulo">Buscador</h2>

      <input
        className="texto"
        type="text"
        placeholder="Buscar"
        // value={nombreDato}
        onChange={buscando}
      />

      <p className="textoP">Nombre buscado {nombreSeleccionado}</p>
      {/* Lista donde se ve lo buscado  */}
      <ul className="lista">
        {nombres
          .sort(() => Math.random() - 0.5) // Mezcla aleatoriamente el array
          .slice(0, 3) // Selecciona los primeros 3 elementos del array mezclado
          .map((nombre, index) => (
            <li className="listaIten" key={index}>
              {nombre}
            </li>
          ))}
      </ul>
    </>
  );
}

export default Buscador;
