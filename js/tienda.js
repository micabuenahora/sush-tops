/* contenido del Body, cards */
const shopContent = document.getElementById("shopContent");
/* ver carrito */
const verCarrito = document.getElementById("verCarrito");

/* modal */
const modalContainer = document.getElementById("modalContainer");


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

const carrito = [];

/*creo las cards y las agrego al padre content */
ListaTop.forEach((tops)=> {
 let contenidoCard = document.createElement("div")
 contenidoCard.className = "cardTops";
 contenidoCard.innerHTML =  `
 <img src = "${tops.imagen}">
 <h3> ${tops.nombre}</h3>
 <p  class="precio"> $${tops.precio}</p>`;
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
    /* todo lo que quiero que agregue al carrito */
carrito.push({
  imagen : tops.imagen,
  nombre : tops.nombre,
  precio: tops.precio,
})
console.log(carrito)
});
});

/* crear modal apretando icono carrito */
verCarrito.addEventListener("click", () =>{
    modalContainer.innerHTML = " "
    modalContainer.style.display = "flex"
    /* header del modal */ 
   const modalHeader= document.createElement("div")
   modalHeader.className = "modal-header"
    modalHeader.innerHTML =  ` 
    <h1 class="modal-header-title">carrito.</h1>
    `  /* aca lo agrego */
    modalContainer.append(modalHeader);

    /* creo el boton cerrar del modal */
    const modalbutton = document.createElement("h2")
    modalbutton.innerText = "x"
    modalbutton.className = "modal-header-button"
    /* lo agrego */
    modalHeader.append(modalbutton);

    /* apretar boton y cerrar modal */
    modalbutton.addEventListener("click", () =>{
    modalContainer.style.display = "none";
    })


/* recorremos cada uno de los elementos  */
    carrito.forEach((tops) =>{
       /* creo el ,body del modal en donde van a aparecer las cards de los tops seleccionados*/
    let carritoContent = document.createElement("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML =  `  
    <img src="${tops.imagen}">
    <h3> ${tops.nombre}</h3>
    <p> $${tops.precio}</p>
    `;
    modalContainer.append(carritoContent)
     })

    /* footer modal que seria el total */   
     const total = carrito.reduce((acc,el) => acc + el.precio, 0 )
       const totalBuying =  document.createElement("div")
       totalBuying.className ="total-content"
       totalBuying.innerHTML = `total a pagar: $${total}` 
    modalContainer.append(totalBuying)

})
