import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Estructura from "./Componentes/Estructura";
import Nav from "./Componentes/Nav/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Estructura />
      </BrowserRouter>
    </>
  );
}

export default App;
