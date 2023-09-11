export const productos = [
{id:  1 , nombre: "Chescake"   , precio:333 ,imagen: "C:\Users\obhol\OneDrive\Documentos\aldu\paginS\imagenes\brownie 300x300.png" },
{id:   2, nombre:  "Tofi"  , precio:  222 , imagen: "imagenes\tofi.jpeg" },
{id:  3 , nombre:   "Chescake frutilla" , precio:  555,  imagen: "imagenes\chescake de frutilla.jpeg" },
 {id:  4 , nombre:   "Brownie" , precio:   444,  imagen: "imagenes\brownie 300x300.png" },   
]
 localStorage.setItem("productos", JSON.stringify(productos));

