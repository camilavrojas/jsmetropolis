//api para mostrar datos random como información dentro de la pagina Contacto 

const aplicacion = document.querySelector('#contenido')
function traer() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        console.log(data.results['0'])
        contenido.innerHTML = `
        <img src="${data.results['0'].picture.large}" width="100px" class="img-fuid rounded-circle imagenInfoClass">
        <p>Nombre: ${data.results['0'].name.last}</p>
        <p>Mail: ${data.results['0'].email}</p>`
    })
}