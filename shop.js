/////////// productos ////////////////

/* class Productos {   /* funcion construsctora 
    constructor (nombre, precio,stock,imagen, id,cantidad){
    this.nombre = nombre; 
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen;
    this.id = id;
    this.cantidad = cantidad;
}

}  

/* objetos  
let producto1 = new Productos ("top violeta", 3200, 5,"./assets/image/violeta.jpeg",1,1)
let producto2 = new Productos ("top azul", 3100, 4,"./assets/image/azul.jpg",2,1)
let producto3 = new Productos ("top amarillo", 3200, 5,"./assets/image/amarillo.jpeg",3,1)
let producto4 = new Productos ("top marron", 3200, 5,"./assets/image/marron.jpeg",4,1)


const ListaTop = [producto1,producto2,producto3,producto4] /* array */ 

 ////////////////// tienda = donde estan las cards////////////////


/* ver carrito */
const verCarrito = document.getElementById("verCarrito");

/* modal */
const modalContainer = document.getElementById("modalContainer");

/* cantidad en carrito span */
const cantidadEnCarrito = document.getElementById("cantidadEnCarrito");


fetch("tops.json")
.then(response => response.json())
.then(x => {

   const productos = x.productos;

   /* contenido del Body, cards */
const shopContent = document.getElementById("shopContent");

/*creo las cards y las agrego al padre content */
productos.forEach((tops)=> {
 let contenidoCard = document.createElement("div")
 contenidoCard.className = "cardTops";
 contenidoCard.innerHTML =  `
         <img src = "${tops.imagen}">
         <h3> ${tops.nombre}</h3>
         <p  class="precio"> $${tops.precio}</p>
         `

/* lo agrego */   
shopContent.append(contenidoCard);
/* creo el boton */
let comprar = document.createElement("button")
/* texto boton */
comprar.innerText = "agregar al carrito";
/* clase boton card */
comprar.className = "cardButton"
/* lo guardo */
contenidoCard.append(comprar);

comprar.addEventListener("click", () =>{
Swal.fire(
  {
   title: "producto agregado al carrito",
   timer: 700,
   showConfirmButton: false,
}
)
 /* sumar cantidad */
const repeat = carrito.some((repeatProduct) => repeatProduct.id === tops.id)
console.log(repeat);


if (repeat){
   carrito.map((top) => {
      if (top.id === tops.id){
         top.cantidad++;
      }
      
   }); 
   
   /* todo lo que quiero que agregue al carrito */

}else{carrito.push({
  imagen: tops.imagen,
  nombre: tops.nombre,
  precio: tops.precio,
  id: tops.id,
  cantidad: tops.cantidad,

});
}
console.log(carrito)
cantidadAtCarrito();
guardarLocal ()



});
});

})
.catch (error => {
alert("error al cargar los productos")
})


  
/////////////// carrito ////////////////

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/* crear modal apretando icono carrito */
 const mostrarCarrito = () => {
    modalContainer.innerHTML = " "
    modalContainer.style.display = "flex"
    /* header del modal */ 
   const modalHeader= document.createElement("div")
   modalHeader.className = "modal-header"
    modalHeader.innerHTML =  ` 
    <h1 class="modal-header-title">carrito</h1>
    `  /* aca lo agrego */
    modalContainer.append(modalHeader);
 
    /* creo el boton cerrar del modal */
    const modalbutton = document.createElement("h2")
    modalbutton.innerText = "x"
    modalbutton.className = "modal-header-button"
    /* aca lo agrego */
    modalHeader.append(modalbutton);
 
    /* apretar boton y cerrar modal */
    modalbutton.addEventListener("click", () =>{
    modalContainer.style.display = "none";
    })
 
 
 /* recorro cada top */
    carrito.forEach((tops) =>{
       /*body del modal en donde van a aparecer las cards de los tops seleccionados*/
    let carritoContent = document.createElement("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML =  `  
    <img src="${tops.imagen}">
    <h3> ${tops.nombre}</h3>
    <p> $${tops.precio}</p>
    <span class="restar"> - </span>
    <p> cantidad: ${tops.cantidad}</p>
    <span class="sumar"> + </span>
    <p> Total: $${tops.cantidad * tops.precio}</p>
    <span class= "eliminarEncarrito"></span>
    `;
    modalContainer.append(carritoContent)

    /*  boton de restar en carrito */
      let restar  = carritoContent.querySelector(".restar")
     restar.addEventListener("click", () => {
      if(tops.cantidad >= 2) {
         tops.cantidad--;
         mostrarCarrito();
      }else{
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'no se puede eliminar mas de un elemento',
            
          })
      }
      
     });

    /*  boton de restar en carrito */
      let sumar  = carritoContent.querySelector(".sumar")
     sumar.addEventListener("click", () => {
         tops.cantidad++;

      mostrarCarrito();
     });



     }) 
     


 console.log(carrito.length);
    /* footer modal que seria el total */   
     const total = carrito.reduce((acc,top) => acc + top.precio * top.cantidad , 0 )
       const totalBuying =  document.createElement("div")
       totalBuying.className ="total-content"
       totalBuying.innerHTML = `total a pagar: $${total}` 
    modalContainer.append(totalBuying)
 

}
 /* cantidad en carrito span */
const cantidadAtCarrito = () => {
cantidadEnCarrito.style.display = "block";


const carritoLength = carrito.length;
localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
cantidadEnCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
};

/* localStorage */
const guardarLocal = () => {

  localStorage.setItem("carrito", JSON.stringify(carrito));
 
}

verCarrito.addEventListener("click",mostrarCarrito)

cantidadAtCarrito()



