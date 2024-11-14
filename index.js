import Producto from "./classes/Producto.js"

let btnagregar = document.getElementById("btnagregar")
let listaProd = document.getElementById("listaProd")

function cargarItems(codigo, nombre, precio, imagen){
  
    Producto.agregar(codigo, nombre, precio, imagen)
    console.log(Producto.verItems())
}

function eliminarItem(id){
    Producto.eliminar(id)
    mostarLista(Producto.verItems())
    console.log(id)
    console.log(Producto.verItems())
}


function mostarLista(list){

    let listado = []
    for (let i = 0; i < list.length; i++){
        listado.push(`
            <tr>
                <th>${list[i].codigo}</th>
                <th>${list[i].nombre}</th>
                <th>${list[i].precio}</th>
                <th>${list[i].imagen}</th>
                <th><button onclick="eliminarItem('${list[i].codigo}')">Eliminar</button></th>
            </tr>
            `)
        
    }

    listaProd.innerHTML = listado.join("")
}

window.eliminarItem = eliminarItem

btnagregar.addEventListener("click", () => {
    
let codigo = document.getElementById("codigo").value
let nombre = document.getElementById("nombre").value
let precio = document.getElementById("precio").value
let imagen = document.getElementById("img").value

    cargarItems(codigo, nombre, precio, imagen)



, imagen

    mostarLista(Producto.verItems())

})

mostarLista(Producto.verItems())