import "./App.css";
import Estructura from "./Componentes/Estructura";
import Nav from "./Componentes/Nav/Nav";
import { BrowserRouter } from "react-router-dom";

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
