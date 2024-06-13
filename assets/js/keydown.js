var colorGlobal

document.addEventListener("keydown", function(e) {
    var key = e.key.toLowerCase()// Obtenemos la tecla presionada en minúscula
    
    // Asignamos el color correspondiente a la tecla presionada
    if (key === 'a') {
        colorGlobal = 'pink'
    }
    else if (key === 's') {
        colorGlobal = 'orange'
    }
    else if (key === 'd') {
        colorGlobal = 'skyblue'
    }
    else if (key === 'q') {
        crearDiv('purple')
    }
    else if (key === 'w'){
        crearDiv('gray')
    }
    else if (key === 'e') {
        crearDiv('sienna') /* EL BROWN NO PARECIA CAFE*/
    }


    var keyDiv = document.getElementById("key")
    keyDiv.style.backgroundColor = colorGlobal
})

function crearDiv(color) {
    nuevoDiv = document.createElement("div")
    nuevoDiv.style.width = '200px'
    nuevoDiv.style.height = '200px'
    nuevoDiv.style.backgroundColor = color
    nuevoDiv.style.border = "1px solid black"
    document.body.appendChild(nuevoDiv)
}