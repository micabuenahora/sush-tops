class Productos {   /* funcion construsctora */
    constructor (nombre, precio){
    this.nombre = nombre; 
    this.precio = precio;
}
}  

/* objetos  */
let producto1 = new Productos ("top red", 3200)
let producto2 = new Productos ("top pink", 3100)
let producto3 = new Productos ("top white", 3200)
let producto4 = new Productos ("top black", 3200)
let producto5 = new Productos ("top grey", 3000)


const ListaTop = [producto1,producto2,producto3,producto4,producto5] /* array */

  /*FUNCION PARA FILTRAR LOS PRODUCTO */
function FiltrarProductos () {
    let PalabraClave = prompt("ingrese el color del top que quiere comprar: (red,pink,white,black,grey)").toUpperCase()
    let resultado = ListaTop.filter((producto) => producto.nombre.toUpperCase().includes(PalabraClave))
    

    if(resultado.length > 0){ /* SI EL RESULTADO EXISTE */
        let preciosEncontrados = resultado.map ((producto) => producto.precio) /* BUSCAME EL PRECIO DEL RESULTADO */
        let cantidad = parseInt(prompt("Ingrese la cantidad deseada de tops:"));
        let precioTotalTexto = preciosEncontrados.reduce((total, precio) => total + precio, 0) * cantidad; /* SE MULTIPLICA EL PRECIO POR LA CANTIDAD QUE PONGA EL USUARIO */
        alert("El precio totaL es el siguiente: $" + precioTotalTexto);
   
        let dineroIngresado = parseInt(prompt("ingrese la cantidad de dinero con la que va a pagar"))
       
        if(dineroIngresado > precioTotalTexto){   
            let vuelto = dineroIngresado - precioTotalTexto;
            alert("tu cambio es de: $" + " " + vuelto + " " + "gracias por tu compra!")
        }else if (dineroIngresado < precioTotalTexto){
            alert("el dinero ingresado no alcanza para comprar esa cantidad de tops, intenta nuevamente!")
        }else{
            alert("ingresaste el monto justo, ¡muchas gracias por tu compra!")
        }
    } else {
        alert("el producto ingresado no existe")
     }
    
    } 

        
FiltrarProductos() 


