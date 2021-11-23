// guardar datos del formulario cursos en el localstorage

const fiendListCursos = [];

function addFriendToSystemCursos(pIdCursos, pMailCursos, pTextoCursos) {
    const newFriendCursos = {
        id: pIdCursos,
        mail: pMailCursos,
        texto: pTextoCursos,

    };

    localStorage.setItem('id',JSON.stringify(pIdCursos));
    localStorage.getItem(pIdCursos);

    localStorage.setItem('mail',JSON.stringify(pMailCursos));
    localStorage.getItem(pMailCursos);

    localStorage.setItem('texto',JSON.stringify(pTextoCursos));
    localStorage.getItem(pTextoCursos);

    console.log(newFriendCursos);
};
