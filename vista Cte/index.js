import Producto from "../classes/Producto.js"
let divproductos = document.getElementById('productos')

function mostarProductos(list){

    let listado = []
    for (let i = 0; i < list.length; i++){
        listado.push(`
            <div class="card">
            <img src="${list[i].imagen}" class="img"/>
                <ul>
                <li>${list[i].codigo}</li>
                <li>${list[i].nombre}</li>
                <li><strong>$ ${list[i].precio}</strong></li>
                <li><button onclick="eliminarItem('${list[i].codigo}')">Comprar</button></li>
                <ul>
            </div>
            `)
           
    }

    divproductos.innerHTML = listado.join("")
}

mostarProductos(Producto.verItems())