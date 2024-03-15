document.getElementById('ver-btn').addEventListener('click', () => {
    const seleccion = document.getElementById('opciones').value;
    const numeroContainer = document.getElementById('numero-container');
    const imprimirNum = document.getElementById('imprimir');
    let numeros = [];

    imprimirNum.innerText = "";

    // Guardar el número ingresado una vez
    const numeroIngresado = parseInt(document.getElementById('numero').value);

    document.getElementById('numero').value = '';

    if (seleccion === 'pares-mayores' || seleccion === 'impares-mayores') {
        // Mostrar el div numero-container si se selecciona una de las opciones adecuadas
        numeroContainer.style.display = 'block';
    } else {
        numeroContainer.style.display = 'none';
    }

    if (numeroIngresado < 0 || numeroIngresado >= 200) {
        alert('Ingrese un número que este entre 0 y 200');
    }

    for (let i = 200; i >= 1; i--) {
        switch (seleccion) {
            case 'pares':
                if (i % 2 === 0) {
                    numeros.push(i);
                    imprimirNum.innerText += 'Par en posición ' + (i - 1) + ': ' + i + '\n';
                }
                break;
            case 'impares':
                if (i % 2 === 1) {
                    numeros.push(i);
                    imprimirNum.innerText += 'Impar en posición ' + (i - 1) + ': ' + i + '\n';
                }
                break;
            case 'pares-mayores':

                if (i > numeroIngresado && i % 2 === 0) {
                    numeros.push(i);
                    imprimirNum.innerText += 'Par en posición ' + (i - 1) + ': ' + i + '\n';
                }

                break;
            case 'impares-mayores':
                if (i > numeroIngresado && i % 2 === 1) {
                    numeros.push(i);
                    imprimirNum.innerText += 'Impar en posición ' + (i - 1) + ': ' + i + '\n';
                }
                break;
            default:
                break;
        }
    }


});