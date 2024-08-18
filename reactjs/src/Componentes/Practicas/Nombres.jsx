import { useState } from "react";

function Nombres() {
  const [nombreDato, setNombreDato] = useState(""); // Valor actual del input
  const [nombres, setNombres] = useState([]); // Array para almacenar los nombres

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
      </section>
    </div>
  );
}

export default Nombres;
