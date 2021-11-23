// inicio de sesion del index y dedireccionamiento a la pagina Cursos

document.querySelector('#enviar-index').addEventListener('click', iniciarSesion);

function iniciarSesion() {
    var sInicio = '';
    var sContrasenia = '';
    var bAcceso = false; 

    sInicio = document.querySelector('#exampleInputEmail1').value;
    sContrasenia = document.querySelector('#exampleInputPassword1').value;

    bAcceso = validarCredenciales(sInicio, sContrasenia); 

    if (bAcceso == true){
        ingresar();
    }
}

function ingresar() {
    var userIniciaSesion = sessionStorage.getItem('entraUsuarioActivo');
    switch(userIniciaSesion){
        case '1': 
        window.location.href = "/views/cursos.html";
        break;
    }
}