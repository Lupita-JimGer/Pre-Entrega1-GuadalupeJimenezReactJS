import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h1>FOMI-CREATIVA</h1>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                CURSOS
                            </li>
                            <li className="nav-item">
                                MATERIALES
                            </li>
                            <li className="nav-item">
                                PRODUCTOS
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default NavBar