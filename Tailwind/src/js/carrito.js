import Carrito from "../classes/Carrito.js"
import Producto from "../classes/Producto.js"

let listaCarrito = document.getElementById('listaCarrito')
let resumen = document.getElementById('resumen')
let btnVaciar = document.getElementById('vaciar')
btnVaciar.addEventListener('click', () => Carrito.vaciarCarrito())

window.eliminarProductoCarrito = eliminarProductoCarrito
window.agregarCarrito = agregarCarrito
window.restarCarrito = restarCarrito
window.Carrito = Carrito

function agregarCarrito(index){
    const item = Carrito.verCarrito()[index]
    Carrito.agregarProducto(item)
    mostarCarrito(Carrito.verCarrito())
    verResumen(Carrito.verCarrito())
}

function restarCarrito(index){
    const item = Carrito.verCarrito()[index]
    Carrito.restarProducto(item) 
    mostarCarrito(Carrito.verCarrito())
    verResumen(Carrito.verCarrito())
}

function eliminarProductoCarrito(codigo){
    Carrito.eliminarProducto(codigo)
    mostarCarrito(Carrito.verCarrito())
    verResumen(Carrito.verCarrito())
}


function mostarCarrito(list){

    let listado = []
    
    for (let i = 0; i < list.length; i++){

         listado.push(`
<div class="rounded-lg border border-gray-200 bg-white p-4 shadow-lg md:p-6">
<div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
<img src="${list[i].imagen}" class="w-40"/>

  <label for="counter-input" class="sr-only">Cantidad:</label>
  <div class="flex items-center justify-between md:order-3 md:justify-end">
    <div class="flex items-center">
      <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 " onclick="restarCarrito('${i}')">
        <svg class="h-2.5 w-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
        </svg>
      </button>
      <input type="text" id="counter-input" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 " placeholder="" value="${list[i].cantidad}" required />
      <button type="button" id="increment-button" data-input-counter-increment="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"  onclick="agregarCarrito('${i}')">
        <svg class="h-2.5 w-2.5 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
        </svg>
      </button>
    </div>
    <div class="text-end md:order-4 md:w-32">
      <p class="text-base font-bold text-gray-900">$${(list[i].precio * list[i].cantidad).toLocaleString("es-ES")}</p>
    </div>
  </div>

  <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">


    <div class="flex items-center gap-4">
    <p" class="text-base font-medium text-gray-900">${list[i].nombre}</p>

      <button type="button" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline" onClick="eliminarProductoCarrito(${list[i].codigo})">
        <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
        </svg>
        Eliminar
      </button>
    </div>
  </div>
</div>
</div>
            `)
           
    }

    if(listado.length > 0){
        listaCarrito.innerHTML = listado.join("")
    }else{
        listaCarrito.innerHTML = `<h2>No hay productos... <a href="./index.html" class="hover:underline">Ir a comprar</a></h2>`
    }
    
}

mostarCarrito(Carrito.verCarrito())


function verResumen(list){

let subTotal = 0


for (let i = 0; i < list.length; i++) {
    subTotal += (list[i].precio * list[i].cantidad)
    
}
let impuestos = (subTotal * 21) /100
let total = subTotal + impuestos + 99

    resumen.innerHTML = `<div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <p class="text-xl font-semibold text-gray-900 ">Resumen de la compra</p>
      
                <div class="space-y-4">
                  <div class="space-y-2">
                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 ">Original price</dt>
                      <dd class="text-base font-medium text-gray-900 ">$${subTotal.toLocaleString("es-ES")}</dd>
                    </dl>
      
                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 ">Envio</dt>
                      <dd class="text-base font-medium text-gray-900 ">$99</dd>
                    </dl>
      
                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 ">Impuestos</dt>
                      <dd class="text-base font-medium text-gray-900 ">$${impuestos.toLocaleString("es-ES")}</dd>
                    </dl>
                  </div>
      
                  <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
                    <dt class="text-base font-bold text-gray-900 ">Total</dt>
                    <dd class="text-base font-bold text-gray-900 ">$${total.toLocaleString("es-ES")}</dd>
                  </dl>
                </div>
      
                <a href="./gracias.html"><button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5" onClick="Carrito.vaciarCarrito()">Confirmar compra</button></a>
      
                <div class="flex items-center justify-center gap-2">
                  <span class="text-sm font-normal text-gray-500 "> o </span>
                  <a href="./index.html" title="" class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                    Continuar Comprando
                    <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </a>
                </div>
              </div>`

}

verResumen(Carrito.verCarrito())