import React from "react";

function Tareas() {
  return (
    <>
      <div className="contenedor lol">
        <form
          className="detalleForm contenedor"
          // onClick={noCerrarEnElDiv}
          // onSubmit={manejarSubmit}
        >
          <div className="hijoForm">
            <input
              className="texto"
              type="text"
              id=""
              name=""
              placeholder="Escriba su tarea"
              // value={}
              // onChange={}
            />
          </div>
          <div className="hijoForm">
            <button className="boton">Guardar</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Tareas;
