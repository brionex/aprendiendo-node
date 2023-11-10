// Para usar modulos con la extension .mjs
// tanto el archivo principal como el modulo deben tener la extension

export function sumar(n1, n2) {
  return n1 + n2
}

export const nombre = 'Leonel Briones'

export const numero = 1_000_000

export const miObject = {
  dato1: '1',
  dato2: '2',
}


// forma de importar.

// Importar todo
//* import * as nombre from 'archivo.js'

// Importar funcionalidades
//* import {funcion, variable} from 'archivo.js'

// Cargar un archivo
//* import 'archivo.js'
