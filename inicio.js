let carpetas = JSON.parse(localStorage.getItem("carpetas")) || [];

function render() {
    let contenedor = document.getElementById("contenedor");
    let filtro = document.getElementById("buscar").value.toLowerCase();

    contenedor.innerHTML = "";

    carpetas.forEach((c, i) => {
        if (!c.nombre.toLowerCase().includes(filtro)) return;

        let div = document.createElement("div");
        div.className = "carpeta";

        let preview = c.imagenes.length > 0 
            ? `<img src="${c.imagenes[0]}">` 
            : `<div>No hay vista previa</div>`;

        div.innerHTML = `
            <div class="preview">${preview}</div>
            <div class="nombre">${c.nombre}</div>
        `;

        div.onclick = () => {
            localStorage.setItem("carpetaActual", i);
            window.location.href = "carpeta.html";
        };

        contenedor.appendChild(div);
    });
}

render();
