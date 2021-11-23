// validacion de inicio de sesion en el index

function obtenerListaUsuarios() {
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLocal'));

    if (listaUsuarios == null ) {
        listaUsuarios = 
        [
            ['1', 'Camila', 'Rodriguez', 'camilarojas@hotmail.com', '1234entrar', '1995-10-07', '1']
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


