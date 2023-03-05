import React from 'react'
import './register.css'

function Register() {
  return (
    <div className="loginContainer">
    <form className="formContainer" name="sendMessage" id="contactForm" method="GET" action="/http://127.0.0.1:4005/registro">
    <div>
        <label className="labelForm">Usuario</label>
          <div>
            <input type="text" placeholder='Usuario'  />
          </div>
        <p className="advertencia">Usuario Incorrecto</p>
    </div>
    <div >
        <label for="password" className="labelForm" >Contraseña</label>
        <div >
          <input type="password" placeholder='Contraseña'   />
        </div>
        <p className="advertencia">La contraseña debe contener al menos 6 carácteres</p>
    </div>
    <div >
        <label for="password" className="labelForm" >Repetir Contraseña</label>
        <div >
          <input type="password" placeholder='Repetir Contraseña' />
        </div>
        <p className="advertencia">La contraseña debe contener al menos 6 carácteres</p>
    </div>
    <div >
        <label for="email" className="labelForm" >Mail</label>
        <div >
          <input type="email" placeholder='Mail'   />
        </div>
        <p className="advertencia">El mail debe contener al menos 6 carácteres</p>
    </div>
    <div >
        <label for="text" className="labelForm" >Nombre/s</label>
        <div >
          <input type="text" placeholder='Nombre/s'    />
        </div>
        <p className="advertencia">El mail debe contener al menos 6 carácteres</p>
    </div>
    <div >
        <label for="text" className="labelForm" >Apellido</label>
        <div >
          <input type="text" placeholder='Apellido'  />
        </div>
        <p className="advertencia">El mail debe contener al menos 6 carácteres</p>
    </div>
    <div >
        <label for="text" className="labelForm" >Edad</label>
        <div >
          <input type="text" placeholder='Edad'  />
        </div>
        <p className="advertencia">El mail debe contener al menos 6 carácteres</p>
    </div>
    
    <div className="advertenciaLogin"id="advertenciaLogin">
            <p className="advertencia">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <b>Error: </b>Complete los campos.</p>
    </div>
    <div >
          <button className="boton" type="submit"  >Registrarse</button>
    </div>

</form>

</div>
  )
}

export default Register