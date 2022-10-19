const URL = "https://pokeapi.co/api/v2/pokemon/"
const contenedor = document.getElementById('datos');
const boton = document.getElementById('boton');
boton.addEventListener('click', (e) => {
    e.preventDefault()
    getId()
    let eliminar=document.getElementById('eliminar')
    eliminar.addEventListener("click", nuevo);
    function nuevo() {
        datos.innerHTML = "";
    }
})
async function getId() {
    const nombre = document.getElementById('buscar').value
    const respuesta = await fetch(URL + nombre)
    const datos = await respuesta.json()
    contenedor.innerHTML=''
    contenedor.innerHTML += `<h2>${datos.name}</h2>`
    contenedor.innerHTML += `<img src="${datos.sprites.front_default}" alt="">`
    for (let i = 0; i < datos.stats.length; i++) {
        contenedor.innerHTML += `<div>${datos.stats[i].stat.name} : ${datos.stats[i].base_stat}</div>`
    }
}


