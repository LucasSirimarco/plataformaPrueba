import React from 'react'
import './register.css'
import { useState } from 'react'

function Register() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [rewpassword, setRewpassword] = useState('');
  const [mail, setMail] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');

  const enviarRegistro = (e)=>{
    e.preventDefault();
    fetch('http://127.0.0.1:4005/sendRegister', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {
          User: user,
          Password: password,
          Mail: mail,
          Nombres: nombres,
          Apellido: apellido,
          Edad: edad
        }
  )}).then(res => {
    console.log("Registro Enviado")
    return res.json()
  }).then(data => {
    console.log(data)


  }).catch(error => {
    console.log("Error")

  })



  }

  return (
    <div className="loginContainer">
    <form className="formContainer" name="sendMessage" id="contactForm" method="POST" action="/http://127.0.0.1:4005/sendRegister">
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
    <div >
        <label for="password" className="labelForm" >Repetir Contraseña</label>
        <div >
          <input type="password" placeholder='Repetir Contraseña' value={rewpassword} onChange={e => setRewpassword(e.target.value)} />
        </div>
        <p className="advertencia">La contraseña debe contener al menos 6 carácteres</p>
    </div>
    <div >
        <label for="email" className="labelForm" >Mail</label>
        <div >
          <input type="email" placeholder='Mail' value={mail} onChange={e => setMail(e.target.value)}  />
        </div>
        <p className="advertencia">El mail debe contener al menos 6 carácteres</p>
    </div>
    <div >
        <label for="text" className="labelForm" >Nombre/s</label>
        <div >
          <input type="text" placeholder='Nombre/s'   value={nombres} onChange={e => setNombres(e.target.value)}  />
        </div>
        <p className="advertencia">El mail debe contener al menos 6 carácteres</p>
    </div>
    <div >
        <label for="text" className="labelForm" >Apellido</label>
        <div >
          <input type="text" placeholder='Apellido'value={apellido} onChange={e => setApellido(e.target.value)}   />
        </div>
        <p className="advertencia">El mail debe contener al menos 6 carácteres</p>
    </div>
    <div >
        <label for="text" className="labelForm" >Edad</label>
        <div >
          <input type="text" placeholder='Edad'  value={edad} onChange={e => setEdad(e.target.value)} />
        </div>
        <p className="advertencia">El mail debe contener al menos 6 carácteres</p>
    </div>
    
    <div className="advertenciaLogin"id="advertenciaLogin">
            <p className="advertencia">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <b>Error: </b>Complete los campos.</p>
    </div>
    <div >
          <button className="boton" type="submit" onClick={enviarRegistro} >Registrarse</button>
    </div>

</form>

</div>
  )
}

export default Register