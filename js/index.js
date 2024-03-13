let numeros = [];
for (let i=1; i<=200; i++){
    numeros.push(i);
}
console.log(numeros);

document.getElementById("opciones").addEventListener("change", function() { 
    //change es un evento, se usa cuando se activa cuando se cambia de opción 
    // function()-> es una función anonima
    let opcionSeleccionada = this.value; //guarda el valor que tenga la opción que disparo el evento
    let numeroContainer = document.getElementById("numero-container");
    let verBtn = document.getElementById("ver-btn");


    // Mostrar el contenedor de número solo cuando se selecciona la opción "Pares Mayores"
    if (opcionSeleccionada === "pares-mayores" || opcionSeleccionada === "pares-menores") {
        numeroContainer.style.display = "block"; //cambiando el estilo de visualización para que aparezca un bloque
        verBtn.style.display = "inline-block"; // Mostrar el botón "Ver"
    } else {
        numeroContainer.style.display = "none";

    }
});