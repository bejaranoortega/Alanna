function login() {
    let u = document.getElementById("user").value.trim();
    let p = document.getElementById("pass").value.trim();

    if (u === "familia" && p === "familiabeor@0001") {
        window.location.href = "inicio.html";
    } else {
        alert("Acceso denegado ❌");
    }
}
