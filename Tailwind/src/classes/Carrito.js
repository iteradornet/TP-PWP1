

class Carrito {

    constructor(codigo, nombre, precio, imagen, cantidad = 1){
        this.codigo = codigo,
        this.nombre = nombre,
        this.precio = precio,
        this.imagen = imagen,
        this.cantidad = cantidad
    }

    static itemsCarrito = []

    static{
        const itemsLS = JSON.parse(localStorage.getItem("carrito")) || []
        itemsLS.forEach(element => {
            this.itemsCarrito.push(new this(element.codigo, element.nombre, element.precio, element.imagen, element.cantidad))
        })
    }

    static updateCarrito(){
        localStorage.setItem("carrito", JSON.stringify(this.itemsCarrito))
    }

    static agregarProducto(producto) {
        const productoExistente = this.itemsCarrito.find(item => item.codigo === producto.codigo);
        if (productoExistente) {
            productoExistente.cantidad += 1; 
        } else {
            this.itemsCarrito.push(producto)
        }
        this.updateCarrito()
    }

    static eliminarProducto(codigo) {
        this.itemsCarrito.splice(this.itemsCarrito.indexOf(this.itemsCarrito.find((item) => item.codigo == codigo)), 1)
        this.updateCarrito()
    }

    static restarProducto(producto){
        const productoExistente = this.itemsCarrito.find(item => item.codigo === producto.codigo);
        if (productoExistente.cantidad > 1) {
            productoExistente.cantidad -= 1; 
        }else{

            this.itemsCarrito.splice(this.itemsCarrito.indexOf(this.itemsCarrito.find((item) => item.codigo == productoExistente.codigo)), 1)
        }

        this.updateCarrito()
    }

static vaciarCarrito(){
    localStorage.removeItem("carrito")
}

    static verCarrito(){
        return this.itemsCarrito
    }


}

export default Carrito