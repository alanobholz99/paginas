import { comprarproducto } from "./carrito.js"

const divproductos = document.getElementById("productos")
export let productosdisponibles = JSON.parse(localStorage.getItem("productos"))
document.addEventListener("DOMContentLoaded", () => {
    generarcardproductos(productosdisponibles)
})
export const generarcardproductos = (productos)  => {
divproductos.innerHTML = "";

productos.forEach((producto) => {
 
 const {imagenes, id, nombre, precio} = producto
    let card = document.createElement("div")
 card.className = "producto";
    card.innerHTML = `

<div class="card" style="width: 18rem;">
<img src="imagen/${imagenes}" class="card-img-top" alt="...">
<div class= "rojo" class="card-body">
 <p class="card-text">${nombre}</p>
  <p>${precio} </p>
  <button id="btn${id}" class= "btn btn-primary">comprar</button>

  </div>
</div>`;
divproductos.appendChild(card);

const bntComprar = document.getElementById(`btn${id}`)
bntComprar.addEventListener("click", () => comprarproducto("id"))
});
};

let color = document.getElementById("color")
let cambio = document.getElementById("cambio")
cambio.addEventListener("keyup", (e) => {
    if (e.key === "a"){
        color.className = "rojo";
    }else{
        color.className = "azul"
    }
} )

