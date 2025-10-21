export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md main-navbar">
      <div className="container d-flex align-items-center justify-content-between">
        <a className="navbar-brand text-bold text-gray" href="#">
          Seguros Azteca
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center gap-2">
            <li className="nav-item">
              <a className="nav-link active text-bold" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-bold" href="#">
                Nuestros seguros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-bold" href="#">
                Centro de ayuda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-bold" href="#">
                Pólizas
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};