let carpetas = JSON.parse(localStorage.getItem("carpetas")) || [];
let index = localStorage.getItem("carpetaActual");

let galeria = document.getElementById("galeria");

if (carpetas[index]) {
    carpetas[index].imagenes.forEach(img => {
        let imagen = document.createElement("img");
        imagen.src = img;
        galeria.appendChild(imagen);
    });
}
