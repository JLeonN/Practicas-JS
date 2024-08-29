import Inicio from "./Paginas/Inicio";
import Contador from "./Practicas/Contador";
import Nombres from "./Practicas/Nombres";
import { Route, Routes } from 'react-router-dom';

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
        </Routes>
    </>
  );
}

export default Estructura;
