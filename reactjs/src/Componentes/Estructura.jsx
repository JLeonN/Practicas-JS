import { Route, Routes } from 'react-router-dom';
import Inicio from "./Paginas/Inicio";
import Contador from "./Practicas/Contador";
import Nombres from "./Practicas/GestorDeNombres/Nombres";
import Tareas from "./Practicas/Tareas";

function Estructura() {
  return (
    <>
        <Routes>
          {/* Inicio */}
          <Route path="/" element={<Inicio />} />
          {/* <Inicio /> */}

          {/* Practicas */}
          <Route path="Contador" element={<Contador />} />
          <Route path="Nombres" element={<Nombres />} />
          <Route path="Tareas" element={<Tareas />} />
        </Routes>
    </>
  );
}

export default Estructura;
