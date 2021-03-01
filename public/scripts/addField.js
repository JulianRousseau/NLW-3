//buscar el boton
document.querySelector("#add-time")
//cuando clikeo el boton
.addEventListener('click',cloneField)
//ejecutar una accion
function cloneField(){
    //duplicar campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //limpiar los campos
    const fields = newFieldContainer.querySelectorAll('input')
    //para cada campo, limpiarlos
    fields.forEach(function(field) {
        field.value = ""
    })
    //colocarlos en la pagina. Donde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    

    