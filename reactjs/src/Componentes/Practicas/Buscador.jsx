import React, { useState } from "react";

function Buscador({ nombres }) {
  const [nombreBuscado, setNombreBuscado] = useState("");
  const [resultadoBusqueda, setResultadoBusqueda] = useState(""); // Para mostrar el resultado

  // Función de búsqueda
  const buscando = (evento) => {
    const valor = evento.target.value;
    setNombreBuscado(valor);
    // Si el input esta vacio
    if (valor === "") {
      setResultadoBusqueda("Escribe un nombre para buscar.");
      return;
    }
    // Buscado coincide con algun nombre en la lista
    const coincidencia = nombres.find((nombre) =>
      nombre.toLowerCase().includes(valor.toLowerCase())
    );
    // Muestra el resultado dependiendo de si hay coincidencia o no
    if (coincidencia) {
      setResultadoBusqueda(`Nombre encontrado: ${coincidencia}`);
    } else {
      setResultadoBusqueda("No se encontro ninguna coincidencia.");
    }
  };

  return (
    <>
      <h2 className="titulo">Buscador</h2>

      <input
        className="texto"
        type="text"
        placeholder="Buscar"
        value={nombreBuscado}
        onChange={buscando}
      />

      <p className="textoP">{resultadoBusqueda}</p>

      {/* Lista donde se ve lo buscado */}
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
