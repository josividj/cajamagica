///CAJA MÁGICA DE NUMEROS
///se le pregunta al usuario si quiere jugar
///si sí, se le pide ingrese un número menor que 100

///la caja detecta si el número es par, impar y si además es primo
///al final de cada usuario ingresado se le presentan los resultados parciales
///lo que permite cambiar de usuario sin salir


const salir = 'n';

let numero;
let opcion;
let nombre;
let identidad = '';
let sumaPar;
let sumaImpar;
let sumaPrimos;

do {

    alert('Bienvenido al juego de la caja mágica!!!');

    opcion = prompt('Quiere probarlo? s/n');

    if (opcion != salir) {
        nombre = prompt('Por favor ingrese su nombre');
        numero = Number(prompt('Ingrese un número entre 2 y 100'));
        alert(nombre + ' Ud. ha ingresado el número : ' + numero);

        if (identidad != nombre) {
            sumaPar = 0;
            sumaImpar = 0;
            sumaPrimos = 0;
        }

        if (numero >= 2 && numero <= 100) {
            switch (numero % 2) {
                case 0:
                    alert('El número ingresado es PAR');
                    sumaPar++;
                    if (numero === 2) {
                        alert('además es un NUMERO PRIMO!');
                        sumaPrimos++;
                    }
                    break;
                default:
                    alert('El número ingresado es IMPAR');
                    sumaImpar++;
                    if (numero === 3 || numero === 5 || numero === 7 || numero === 11) {
                        alert('además es un NUMERO PRIMO!');
                        sumaPrimos++;
                    }
                    if (numero % 3 !== 0 && numero % 5 !== 0 && numero % 7 !== 0 && numero % 11 !== 0) {
                        alert('además es un NUMERO PRIMO!');
                        sumaPrimos++;
                    }
                    break;
            }
            alert(nombre + ' Hasta este momento Ud. ha obtenido: ' + '\n' + sumaPar + ' número/s par/es; ' + '\n' + sumaImpar + ' número/s impar/es; y ' + '\n' + sumaPrimos + ' número/s primos!!!');
        } else {
            alert('El número ingresado no es válido');
        }
        identidad = nombre;
    } else {
        alert('Gracias y hasta pronto!');
    }
} while (opcion != salir);