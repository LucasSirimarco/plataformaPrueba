import React from 'react'
import './home.css'


function Home() {
    return(
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Perspective</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Perfil</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Buscar Jugadores</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Buscar Equipo</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Crear Team Competitivo</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Go to Play</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Ver CV Competitivo</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

        </div>
    )
}

export default Home;