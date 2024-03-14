document.getElementById('ver-btn').addEventListener('click', () => {
    const seleccion = document.getElementById('opciones').value;
    const numeroContainer = document.getElementById('numero-container');
    const imprimirNum = document.getElementById('imprimir');
    let numeros = [];
    let posicion = 0;

    imprimirNum.innerText = "";


    if (seleccion === 'pares-mayores' || seleccion === 'pares-menores') {
        // Mostrar el div numero-container si se selecciona una de las opciones adecuadas
        numeroContainer.style.display = 'block';
    }


    for (let i = 200; i >= 1; i--) {
        switch (seleccion) {
            case 'pares':
                if (i % 2 === 0) {
                    numeros.push(i);
                    imprimirNum.innerText += 'Par en posición ' + (posicion++) + ': ' + i + '\n';
                }
                break;
            case 'impares':
                if (i % 2 !== 0) {
                    numeros.push(i);
                    imprimirNum.innerText += 'Impar en posición ' + (posicion++) + ': ' + i + '\n';
                }
                break;
            case 'pares-mayores':
                
                break;
            case 'pares-menores':
                
                break;
            default:
                break;
        }
    }
});