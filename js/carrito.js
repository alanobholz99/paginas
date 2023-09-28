import { productosdisponibles } from "./inicio.js";

JSON.parse(localStorage.getItem("carrito")) === null && localStorage.setItem("carrito", JSON.stringify([]))
document.addEventListener("DOMContentLoaded", () =>  {
dibujarcarrito()
})

let carrito = JSON.parse(localStorage.getItem("carrito"))
const listacarrito = document.getElementById("items")
const footcarrito = document.getElementById("totales")
const btncarrito = document.getElementById("btncarrito")
const carritotabla = document.getElementById("carrito")
 
btncarrito.addEventListener("click", () => {


if (carritotabla.style.display === "block") {
    
    carritotabla.style.display = "none"
}else{
    carritotabla.style.display = "block"
    dibujarcarrito()
}

})

export const comprarproducto = (idproducto) => {

const producto = productosdisponibles.find((producto) => producto.id === idproducto )



const productoCarrito = carrito.find ((producto) => producto.id === idproducto )
const {imagenes, nombre, precio, id} = producto

if (productoCarrito === undefined){
    const nuevoproductocarrito = {
        id:id,
        nombre:nombre,
        precio: precio,
        imagenes: imagenes,
        cantidad: 1,
    }
        carrito.push(nuevoproductocarrito)
   localStorage.setItem("carrito", JSON.stringify(carrito))
}else{

const indexproductocarrito = carrito.findIndex((producto) => producto.id === idproducto )
carrito[indexproductocarrito].cantidad++
carrito[indexproductocarrito].precio = precio * carrito[indexproductocarrito].cantidad
localStorage.setItem("carrito", JSON.stringify(carrito))


    }
    carrito = JSON.parse(localStorage.getItem("carrito"))
    Swal.fire(
        'agregado al carrito!',
        'You clicked the button!',
        'success'
      )
      console.log(carrito)
}

const dibujarcarrito = () => {
    
listacarrito.innerHTML = " "
    
    carrito.forEach(producto => {
        const {imagenes, id, nombre, precio, cantidad} = producto
let body = document.createElement("tr")

body.className = "producto__carrito"
body.innerHTML = `
<th><img id="fotoProductoCarrito" src="${imagenes}" class="card-img-top" style="width:40%; height: 30%"</th>
<td>${nombre}</td>
<td>${cantidad}</td>
<td>${precio/cantidad}</td>
<td>${precio}</td>
<td>
<button id="+${id}" class="btn btn-success">+</button>
<button id="-${id}" class="btn btn-danger">-</button>
</td>
`
listacarrito.append(body)
const btnAgregar = document.getElementById(`+${id}`)
const btnRestar = document.getElementById(`-${id}`)


btnAgregar.addEventListener("click", () => aumentarCantidad(id))
btnRestar.addEventListener("click", () => restarCantidad(id))

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
    <td>${generartotales().cantidadTotal}</td>
    <td></td>
    <td> ${generartotales().costoTotal}</td>
    `

footcarrito.append(footer)
}else{
    footcarrito.innerHTML = "<h3>No hay productos en el carrito</h3>"
}



}

const generartotales = () => {
    const costoTotal = carrito.reduce((total, {precio}) => total + precio, 0)
const cantidadTotal = carrito.reduce((total, {cantidad}) => total + cantidad, 0)

return{
    costoTotal: costoTotal,
    cantidadTotal: cantidadTotal,
}
}
const aumentarCantidad = (id) => {
    const indexProductoCarrito = carrito.findIndex((producto) => producto.id === id);
    const precio = carrito[indexProductoCarrito].precio / carrito[indexProductoCarrito].cantidad

    carrito[indexProductoCarrito].cantidad++;
    carrito[indexProductoCarrito].precio = precio * carrito[indexProductoCarrito].cantidad

    localStorage.setItem("carrito", JSON.stringify(carrito));
    dibujarcarrito();

}

const restarCantidad = (id) => {
    const indexProductoCarrito = carrito.findIndex((producto) => producto.id === id)
    const precio = carrito[indexProductoCarrito].precio / carrito[indexProductoCarrito].cantidad

    carrito[indexProductoCarrito].cantidad--
    carrito[indexProductoCarrito].precio = precio*carrito[indexProductoCarrito].cantidad

    if(carrito[indexProductoCarrito].cantidad === 0){
        carrito.splice(indexProductoCarrito, 1)
    }

    localStorage.setItem("carrito", JSON.stringify(carrito))
    dibujarcarrito()



}


