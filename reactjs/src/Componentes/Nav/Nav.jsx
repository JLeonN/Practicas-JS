import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="navTamaño">
          {/* Titulo  */}
          <h1 className="navTitulo">
            J.
            <span className="navSpan">
              <Link to="/">Leo</Link>
            </span>
            nardo.N
          </h1>
          {/* Enlaces */}
          <ul className="lista enlacesUl">
            <li className="enlacesLi">
              <Link to="Contador">Contador</Link>
            </li>
            <li className="enlacesLi">
              <Link to="Nombres">Nombres</Link>
            </li>
            <li className="enlacesLi">
              <Link to="Tareas">Tareas</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
