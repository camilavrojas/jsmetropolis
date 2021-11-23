// validacion de inicio de sesion en el index el cual solo puede ingresar con ese correo y contraseña

function obtenerListaUsuarios() {
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLocal'));

    if (listaUsuarios == null ) {
        listaUsuarios = 
        [
            ['1', 'Camila', 'Rojas', 'camilarojas@hotmail.com', '1234entrar', '1995-07-07', '1'], 
            ['2', 'Martin', 'Gonzales', 'marting@hotmail.com', 'profejs', '1992-01-23', '1']
        ]
    }
    return listaUsuarios
}
 
function validarCredenciales(pCorreo, pContrasenia)  {
    var listaUsuarios = obtenerListaUsuarios(); 
    var bAcceso = false; 

    for(var i = 0; i < listaUsuarios.length; i++){
        if(pCorreo == listaUsuarios[i][3] && pContrasenia == listaUsuarios[i][4]) {
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
            sessionStorage.setItem('entraUsuarioActivo', listaUsuarios[i][6]);
        }
    }
    return bAcceso; 
}


