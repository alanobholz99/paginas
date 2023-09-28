export const productos = [
{id:  1 , nombre: "Chescake"   , precio:333 ,imagenes: "../imagenes/chescake 300x300.png" },
{id:   2, nombre:  "Tofi"  , precio:  222 , imagenes: "../imagenes/tofi.jpeg" },
{id:  3 , nombre:   "Chescake frutilla" , precio:  555,  imagenes: "../imagenes/chescake de frutilla.jpeg" },
 {id:  4 , nombre:   "Brownie" , precio:   444,  imagenes: "../imagenes/brownie 300x300.png" },   
]
 JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));

