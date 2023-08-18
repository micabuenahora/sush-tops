/* contenido del Body, cards */
const shopContent = document.getElementById("shopContent");
/* ver carrito */
const verCarrito = document.getElementById("verCarrito");

/* modal */
const modalContainer = document.getElementById("modalContainer");

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

