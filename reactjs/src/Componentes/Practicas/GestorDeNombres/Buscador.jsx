import React, { useState } from "react";

function Buscador({ nombres }) {
  const [nombreBuscado, setNombreBuscado] = useState("");
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]); // Para mostrar el resultado

  // Función de búsqueda
  const buscando = (evento) => {
    const valor = evento.target.value;
    setNombreBuscado(valor);

    // Si el input esta vacio
    if (valor === "") {
      setResultadoBusqueda(["Escribe un nombre para buscar."]);
      return;
    }

    // Buscar coincidencias en la lista de nombres
    const coincidencias = nombres.filter((nombre) =>
      nombre.toLowerCase().includes(valor.toLowerCase())
    );

    // Muestra el resultado dependiendo de si hay coincidencia o no
    if (coincidencias.length > 0) {
      setResultadoBusqueda(coincidencias.slice(0, 3)); // Primeras 3 coincidencias
    } else {
      setResultadoBusqueda(["No se encontró ninguna coincidencia."]);
    }
  };

  return (
    <>
      <div className="contenedor cuadrado">
        <h2 className="titulo">Buscador</h2>

        <input
          className="texto"
          type="text"
          placeholder="Buscar"
          value={nombreBuscado}
          onChange={buscando}
        />

        {/* Mostrar resultados de búsqueda en una lista */}
        <p className="textoP">Lista de 3 coincidencias</p>
        <ul className="lista">
          {resultadoBusqueda.map((resultado, index) => (
            <li className="listaIten" key={index}>
              {resultado}
            </li>
          ))}
        </ul>
      </div>

      {/* Lista mezcla aleatoriamente */}
      <p className="textoP">Lista mezcla aleatoriamente</p>
      <ul className="lista">
        {nombres
          .toSorted(() => Math.random() - 0.5) // Mezcla aleatoriamente el array
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

// ASPECT 970
// ASPECT 940
// ASPECT 770
// ROCKET 20
// KODIAK 24
// SIENA 26
// IPANEMA LADY 26/6VEL
// LIBERTY 26/6VEL
// IPANEMA LADY 26
// BAMBINO DLX 20
// BALANCE
// E-STRADA
// MOB 29
