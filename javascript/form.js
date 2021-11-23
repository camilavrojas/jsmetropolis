// guardar los datos del formulario de Tienda en el local storage

const fiendList = [];

function addFriendToSystem(pId, pMail, pTexto) {
    const newFriend = {
        id: pId,
        mail: pMail,
        texto: pTexto
    };

    localStorage.setItem('id',JSON.stringify(pId));
    localStorage.getItem(pId);

    localStorage.setItem('mail',JSON.stringify(pMail));
    localStorage.getItem(pMail);

    localStorage.setItem('texto',JSON.stringify(pTexto));
    localStorage.getItem(pTexto);


    console.log(newFriend);
};

