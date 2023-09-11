import { productos } from "../jss/producto.js";
import { comprarproducto } from "./carrito.js";

const divproductos = document.getElementById("productos")
export let productosdisponibles = JSON.parse(localStorage.getItem("productos"))
document.addEventListener("DOMContentLoaded", () => {
    generarcardproductos(productosdisponibles)
});
export const generarcardproductos = (productos)  => {
divproductos.innerHTML = "";

productos.forEach(element => {
 
 const {imagen, id, nombre, precio} = element
    let card = document.createElement("div")
 card.className = "rojo"
    card.innerHTML = `

<div class="card" style="width: 18rem;">
<img src="imagen/${imagen}" class="card-img-top" alt="...">
<div class= "rojo" class="card-body">
 <p class="card-text">${nombre}</p>
  <p>${precio} </p>
  <button id="btn${id}" class= "btn btn-primary">comprar</button>

  </div>
</div>
 
 `
divproductos.appendChild(card);

const bntcomprar = document.getElementById(`btn${id}`)
bntcomprar.addEventListener("click", () => comprarproducto("id"))
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

