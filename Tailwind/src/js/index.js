import Producto from "../classes/Producto.js"
import Carrito from "../classes/Carrito.js"

let divproductos = document.getElementById('productos')
let compras = document.getElementById('compras')


function cantidadCarrito(){
    if(Carrito.verCarrito().length > 0){
        compras.innerHTML = Carrito.verCarrito().length
    }
    
}


function agregarCarrito(index){
    const item = Producto.verItems()[index]
    console.log(item)
    Carrito.agregarProducto(item)
    cantidadCarrito()
}

window.agregarCarrito = agregarCarrito

function mostarProductos(list){

    let listado = []
    
    for (let i = 0; i < list.length; i++){

        listado.push(`
            <div class="rounded-md w-52 text-center p-4 m-5 shadow-xl border-2">
            <img src="${list[i].imagen}" class="w-40"/>
                <ul>
                <li>${list[i].codigo}</li>
                <li>${list[i].nombre}</li>
                <li ><strong>$ ${list[i].precio}</strong></li>
                <li><button onclick="agregarCarrito('${i}')" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Comprar</button></li>
                <ul>
            </div>
            `)
           
    }

    divproductos.innerHTML = listado.join("")
}

mostarProductos(Producto.verItems())
cantidadCarrito()