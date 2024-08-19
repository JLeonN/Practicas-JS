function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="navTamaño">

        {/* Titulo  */}
        <h1 className="navTitulo">
          J.<span className="navSpan">Leo</span>nardo.N
        </h1>
        {/* Enlaces */}
        <ul className="lista enlacesUl">
          <li className="enlacesLi">Contador</li>
          <li className="enlacesLi">Nombres</li>
        </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
