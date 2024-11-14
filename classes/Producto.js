

class Producto {


    constructor(codigo, nombre, precio, imagen, cantidad = 1){
        this.codigo = codigo,
        this.nombre = nombre,
        this.precio = precio,
        this.imagen = imagen,
        this.cantidad = cantidad
    }

static items = []

static{
    const itemsLS = JSON.parse(localStorage.getItem("items")) || []
    itemsLS.forEach(element => {
        this.items.push(new this(element.codigo, element.nombre, element.precio, element.imagen))
    })
}

static updateProducto(){
    localStorage.setItem("items", JSON.stringify(this.items))
}

static agregar(codigo, nombre, precio, imagen){
    this.items.push(new this(codigo, nombre, precio, imagen))
    this.updateProducto()
}

static eliminar(codigo){
   this.items.splice(this.items.indexOf(this.items.find((item) => item.codigo == codigo)), 1)
   this.updateProducto()
}

static verItems(){
    return this.items
}
}

export default Producto