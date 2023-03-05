import React from 'react'
import './home.css'
import Carousel from 'react-bootstrap/Carousel';

function Home() {
    return(
        <div className='container-fluid'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Perspective</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Perfil</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Buscar Jugadores</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Buscar Equipo</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Crear Team Competitivo</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Go to Play</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Ver CV Competitivo</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <Carousel>
        <Carousel.Item interval={1500}>
        <iframe src="https://player.twitch.tv/?channel=twitchrivals_es&parent=www.example.com" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"

            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


        </div>
    )
}

export default Home;