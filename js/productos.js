class Productos {   /* funcion construsctora */
    constructor (nombre, precio,stock,imagen){
    this.nombre = nombre; 
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen
}

}  

/* objetos  */
let producto1 = new Productos ("top violeta", 3200, 5,"./assets/image/violeta.jpeg")
let producto2 = new Productos ("top azul", 3100, 4,"./assets/image/azul.jpg")
let producto3 = new Productos ("top amarillo", 3200, 5,"./assets/image/amarillo.jpeg")
let producto4 = new Productos ("top marron", 3200, 5,"./assets/image/marron.jpeg")


const ListaTop = [producto1,producto2,producto3,producto4] /* array */
