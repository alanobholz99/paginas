import { productosdisponibles } from "./inicio.js";

JSON.parse(sessionStorage.getItem("carrito")) === null && sessionStorage.setItem("carrito", JSON.stringify([]))
document.addEventListener("DOMContentLoaded", () =>  {
    dibujarcarrito()
})

let carrito = JSON.parse(sessionStorage.getItem("carrito"))
const listacarrito = document.getElementById("items")
const footcarrito = document.getElementById("totales")
const btncarrito = document.getElementById("btncarrito")
const carritotabla = document.getElementById("carrito")
 
btncarrito.addEventListener("click", () => {


if (carritotabla.style.display === "block") {
    
    carritotabla.style.display === "none"
}else{
    carritotabla.style.display === "block"
    dibujarcarrito()
}


});

export const comprarproducto = (idproducto) => {

const producto = productosdisponibles.find((producto) => producto.id === idproducto )

const {imagen, nombre, precio, id} = Element

const productocarrito = carrito.find ((producto) => producto.id === idproducto )
if (productocarrito === undefined){
    const nuevoproductocarrito = {
        id:id,
        nombre:nombre,
        precio: precio,
        imagen: imagen,
        cantidad: 1
    }
        carrito.push(nuevoproductocarrito)
   sessionStorage.setItem("carrito", JSON.stringify(carrito))
}else{

const indexproductocarrito = carrito.findIndex((producto) => producto.id === idproducto )
carrito[indexproductocarrito].cantidad++
carrito[indexproductocarrito].precio = precio * carrito[indexproductocarrito].cantidad
sessionStorage.setItem("carrito", JSON.stringify(carrito))


    }
    carrito = JSON.parse(sessionStorage.getItem("carrito"))
    Swal.fire(
        'agregado al carrito!',
        'You clicked the button!',
        'success'
      )
      console.log(carrito)
}

const dibujarcarrito = () => {
    
    listacarrito.innerHTML = ""
    
    carrito.forEach(element => {
        const {imagen, id, nombre, precio} = element
let body = document.createElement("tr")
body.className = "producto__carrito"
body.innerHTML = `
<th><img id="fotoproductocarrito" src="${imagen}" class = "card-img-top" </th>
<td>${nombre}</td>
<td>${cantidad}</td>
<td>${precio/cantidad}</td>
<td>${precio}</td>

<td>

<button id="+${id}" class="btn btn-success" >+</button>
<button id="-${id}" class = "btn btn-danger" >-</button>
</td>
`
listacarrito.append(body)
const btnagregar = document.getElementById(`+${id}`)
const btnrestar = document.getElementById(`-${id}`)
btnagregar.addEventListener("click", () => aumentarcantidad(id))
btnrestar.addEventListener("click", () => restarcantidad(id))


});
dibujarfooter()

}

const dibujarfooter = () => {
if (carrito.length > 0){
    footcarrito.innerHTML = ""

    let footer = document.createElement("tr")
    footer.innerHTML = `
    <th><b>totales:</b></th>
    <td></td>
    <td>${generartotales().cantidadtotal}</td>
    <td></td>
    <td> ${generartotales().costototal}</td>
    `

footcarrito.append(footer)
}else{
    footcarrito.innerHTML = "<h3>No hay productos en el carrito</h3>"
}



}

const generartotales = () => {
    const costototal = carrito.reduce((acumulador,{precio}) => total + precios, 0)
const cantidadtotal = carrito.reduce((total, {cantidad}) => total + cantidad, 0)

return{
    costototal:costototal,
    cantidadtotal:cantidadtotal,
}
}
const aumentarCantidad = (id) => {
    const indexProductoCarrito = carrito.findIndex((producto) => producto.id === id)
    const precio = carrito[indexProductoCarrito].precio / carrito[indexProductoCarrito].cantidad

    carrito[indexProductoCarrito].cantidad++
    carrito[indexProductoCarrito].precio = precio*carrito[indexProductoCarrito].cantidad

    sessionStorage.setItem("carrito", JSON.stringify(carrito))
    dibujarCarrito()

}

const restarCantidad = (id) => {
    const indexProductoCarrito = carrito.findIndex((producto) => producto.id === id)
    const precio = carrito[indexProductoCarrito].precio / carrito[indexProductoCarrito].cantidad

    carrito[indexProductoCarrito].cantidad--
    carrito[indexProductoCarrito].precio = precio*carrito[indexProductoCarrito].cantidad

    if(carrito[indexProductoCarrito].cantidad === 0){
        carrito.splice(indexProductoCarrito, 1)
    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito))
    dibujarCarrito()



}


