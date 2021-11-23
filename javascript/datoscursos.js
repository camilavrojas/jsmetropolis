// guardar datos del formulario de la pagina Cursos 

document.querySelector('#btnSaveCursos').addEventListener('click', saveFriendCursos);

function saveFriendCursos() {
    const sIdCursos = document.querySelector('#name').value;
    const sMailCursos = document.querySelector('#email').value;
    const sTextoCompletar = document.querySelector('.completar').value;


    addFriendToSystemCursos( sIdCursos, sMailCursos, sTextoCompletar );
}