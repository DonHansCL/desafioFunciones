const blue = document.getElementById("azul")
const red = document.getElementById("rojo")
const green = document.getElementById("verde")
const yellow = document.getElementById("amarillo")

blue.addEventListener("click", function() {
    cambiarColor(blue)
})

red.addEventListener("click", function() {
    cambiarColor(red)
})

green.addEventListener("click", function() {
    cambiarColor(green)
})

yellow.addEventListener("click", function() {
    cambiarColor(yellow)
})

function cambiarColor(elemento) {
    elemento.style.backgroundColor = "black"
}