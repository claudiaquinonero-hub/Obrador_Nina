const boton = document.getElementById("boton-tema");

boton.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
        boton.textContent = "Modo claro";
    } else {
        boton.textContent = "Modo oscuro";
    }
});