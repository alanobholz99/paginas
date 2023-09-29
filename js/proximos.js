let lista = document.getElementById("proximos");

fetch("./productos.json")
.then((response) => response.json ())
.then((data)  => {
const lista = document.getElementById("proximos");
const itemsContent = document.createElement("div");
data.forEach((item) => {
 
    const div = document.createElement("div");
    div.className = "rojo";
    div.innerHTML = `
    <img>${item.imagenes}</img>
    <p >${item.nombre}</p>
    <p>${item.precio} </p>
    <button>$${item.id}</button>
`;

itemsContent.appendChild(div);
    
});
lista.appendChild(itemsContent);

});
