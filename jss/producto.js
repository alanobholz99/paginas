export const productos = [
{id:  1 , nombre: "Chescake"   , precio:1200 ,imagenes: "../imagenes/chescake 300x300.png" },
{id:   2, nombre:  "Tofi"  , precio: 2000 , imagenes: "../imagenes/tofi.jpeg" },
{id:  3 , nombre:   "Chescake frutilla" , precio:  2300,  imagenes: "../imagenes/chescake de frutilla.jpeg" },
 {id:  4 , nombre:   "Brownie" , precio:   1100,  imagenes: "../imagenes/brownie 300x300.png" },   
]
 JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));

