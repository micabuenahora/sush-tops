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
       /*body del modal en donde van a aparecer las cards de los tops seleccionados*/
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
