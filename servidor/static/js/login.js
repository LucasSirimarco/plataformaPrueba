
const validarFormulario = (e)=> {
    let inputUser = document.getElementById("username").value;
    let inputPass = document.getElementById("password").value;

    if (inputUser.length == "" && inputPass == "" ) {
         e.preventDefault();
         document.querySelector(".advertenciaLogin").style.display = "block";
         document.querySelector(".formulario__input_user").style.outline = "1px solid #fd6d6d";
         document.querySelector(".formulario__input_pass").style.outline = "1px solid #fd6d6d";
         document.querySelector(".formulario__validacion-estado_user").style.opacity = 1;
         document.querySelector(".formulario__validacion-estado_user").style.cursor = "pointer"; 
         document.querySelector(".formulario__validacion-estado_pass").style.opacity = 1;
         document.querySelector(".formulario__validacion-estado_pass").style.cursor = "pointer";

    } else if (inputUser.length < 4 || inputUser.length > 35 ) {
         e.preventDefault();
         document.querySelector(".formulario__input-error_user").style.display = "block";
         document.querySelector(".formulario__validacion-estado_user").style.opacity = 1;
         document.querySelector(".formulario__validacion-estado_user").style.cursor = "pointer";
         document.querySelector(".formulario__input_user").style.outline = "1px solid #fd6d6d";
         
    } else if (inputPass.length < 4 || inputPass.length > 16 ) {
        e.preventDefault();
        document.querySelector(".formulario__input-error_pass").style.display = "block";
        document.querySelector(".formulario__validacion-estado_pass").style.opacity = 1;
        document.querySelector(".formulario__validacion-estado_pass").style.cursor = "pointer";
        document.querySelector(".formulario__input_pass").style.outline = "1px solid #fd6d6d";
        
   } else {
            return alert("Formulario enviado");
    }

}

document.getElementById("advertenciaLogin").addEventListener("click",()=>{
    document.querySelector(".advertenciaLogin").style.display = "none";
    document.querySelector(".formulario__input_user").style.outline = "none";
    document.querySelector(".formulario__input_pass").style.outline = "none";
    document.querySelector(".formulario__validacion-estado_user").style.opacity = 0;
    document.querySelector(".formulario__input_user").style.outline = "none";
    document.querySelector(".formulario__validacion-estado_pass").style.opacity = 0;
    document.querySelector(".formulario__input_pass").style.outline = "none";
    
})



document.getElementById("contactForm").addEventListener('submit',  validarFormulario)


    // const user = loginForm["user"].value;
    // const pass = loginForm["pass"].value;

    // const respuesta = await fetch("/api/users",{
    //     method:"POST",
    //     headers:{
    //     contentType: "aplication/json"
    //     },
    //     body: JSON.stringify({
    //         user,
    //         pass
    //     })
    // })


console.log("Cargadoa")
// const data = await respuesta.JSON();

// console.log(data);

// loginForm.reset()

const sacarCartelitoUser = ()=>{

         document.querySelector(".formulario__input-error_user").style.display = "none";
         document.querySelector(".formulario__validacion-estado_user").style.opacity = 0;
         document.querySelector(".formulario__input_user").style.outline = "none";
}
const sacarCartelitoPass = ()=>{

    document.querySelector(".formulario__input-error_pass").style.display = "none";
    document.querySelector(".formulario__validacion-estado_pass").style.opacity = 0;
    document.querySelector(".formulario__input_pass").style.outline = "none";
}
document.querySelector(".formulario__validacion-estado_pass").addEventListener('click', sacarCartelitoPass)
document.querySelector(".formulario__validacion-estado_user").addEventListener('click', sacarCartelitoUser)

const sacarOutlineUser = ()=>{
    document.querySelector(".formulario__input_user").style.outline = "none"
    document.querySelector(".formulario__validacion-estado_user").style.opacity = 0;
    document.querySelector(".formulario__input-error_user").style.display = "none";
}

const sacarOutlinePass = ()=>{
    document.querySelector(".formulario__input_pass").style.outline = "none"
    document.querySelector(".formulario__validacion-estado_pass").style.opacity = 0;
    document.querySelector(".formulario__input-error_pass").style.display = "none";
}
document.querySelector(".formulario__input_pass").addEventListener("click",sacarOutlinePass)
document.querySelector(".formulario__input_user").addEventListener("click",sacarOutlineUser)
document.querySelector(".formulario__input_pass").addEventListener("keyup",sacarOutlinePass)
document.querySelector(".formulario__input_user").addEventListener("keyup",sacarOutlineUser)

