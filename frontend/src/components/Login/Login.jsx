import './login.css'
import { useState } from 'react'
import Cookies from "universal-cookie"
import { Navigate } from "react-router-dom";

function Login() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState()
  const [boleanToken, setBoleanToken] = useState(false)

  const enviarFormulario = (e)=>{ 
    e.preventDefault();
    fetch('http://127.0.0.1:4010/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {
          User: user,
          Password: password
        }
  )}).then(res => {
    console.log("Formulario Enviado");
    return res.json()
  }).then(data => {
    setToken(data)
    console.log("Debug de token 1");
    console.log(data);
    console.log("Debug de token 2");
    console.log(token)
    // let tokenNuevo = JSON.parse(token);
    let tokenNuevo = token;
    console.log("Debug de token");
    console.log(token);
    console.log("TokenNuevo");
    console.log(tokenNuevo);
    const cookies = new Cookies();
    cookies.set("Token",tokenNuevo,{path:"/"});
    console.log(tokenNuevo.respuestaToken)
    setBoleanToken(true)
  }).catch(error => {
    console.log(`Error al obtener el token, debido al error: [${error}]`)

  })

}


return(
    
    <div className="loginContainer">
          <form className="formContainer" name="sendMessage" id="contactForm" method="GET" action="/http://127.0.0.1:4010/login">
          <div>
              <label className="labelForm">Usuario</label>
                <div>
                  <input type="text" placeholder='Usuario' value={user} onChange={e => setUser(e.target.value)} />
                </div>
              <p className="advertencia">Usuario Incorrecto</p>
          </div>
          <div >
              <label for="password" className="labelForm" >Contraseña</label>
              <div >
                <input type="password" placeholder='Contraseña'  value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <p className="advertencia">La contraseña debe contener al menos 6 carácteres</p>
          </div>
          <div className="advertenciaLogin"id="advertenciaLogin">
                  <p className="advertencia">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  <b>Error: </b>Complete los campos.</p>
          </div>
          <div className='sessionMaintenance' >
                <input className='labelcheckbox' type="checkbox" />
                <label className='labelSession'> Mantener sesion iniciada</label>
          </div>
          <div >
                { boleanToken ? <Navigate to="/home"/>:<button className="boton" type="submit" onClick={enviarFormulario} >Ingresar</button>}
                <p><b>El Formulario se envio correctamente</b></p>
          </div>
          <div>
            <p className="message">¿No está registrado? <a href="register" id="crearCuenta" onclick="">Crear una cuenta</a></p>
          </div>
      </form>
      
    </div>
    
)
}

export default Login