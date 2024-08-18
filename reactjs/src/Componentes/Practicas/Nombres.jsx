import { useState } from "react";

function Nombres() {
  const [nombreDato, setNombreDato] = useState(""); // Valor actual del input
  const [nombres, setNombres] = useState([]); // Array para almacenar los nombres
  const [nombreGanador, setNombreGanador] = useState(""); // Estado para guardar el nombre ganador del sorteo

  // Toma lo que el usuario escribio
  const mostrarNombre = (evento) => {
    setNombreDato(evento.target.value);
  };
  // Cuando el usuario toca el botón, se muestra el nombre en pantalla.
  const MostrarValor = () => {
    if (nombreDato.trim() !== "") {
      // Verifica que el input no esté vacío
      setNombres([...nombres, nombreDato]); // Agrega el nuevo nombre al array
      setNombreDato(""); // Se limpia el campo (input).
    }
    // La función trim() en JavaScript se utiliza para eliminar los espacios en blanco al principio y al final de una cadena de texto. No afecta los espacios en blanco que están en el medio de la cadena.
  };
  
  // Función que se ejecuta cuando el usuario hace clic en "Sorteo"
  const realizarSorteo = () => {
    if (nombres.length > 0) {
      // Verifica que haya al menos un nombre en la lista
      const indiceAleatorio = Math.floor(Math.random() * nombres.length); // Genera un índice aleatorio dentro del rango del array
      setNombreGanador(nombres[indiceAleatorio]); // Actualiza el estado con el nombre seleccionado aleatoriamente
    }
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

        <ul>
          {nombres.map((nombre, index) => (
            <li key={index}>{nombre}</li>
          ))}
        </ul>

        <button className="boton" onClick={realizarSorteo}>
          Sorteo
        </button>
        <p className="textoP">Nombre ganador del sorteo: {nombreGanador || "..."}</p>
      </section>
    </div>
  );
}

export default Nombres;
