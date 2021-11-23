// guardar datos del formulario de Tienda

document.querySelector('#btnSave').addEventListener('click', saveFriend);

function saveFriend() {
    const sId = document.querySelector('#name').value;
    const sMail = document.querySelector('#email').value;
    const sTexto = document.querySelector('.txtSave').value ;


    addFriendToSystem( sId, sMail, sTexto );
}
