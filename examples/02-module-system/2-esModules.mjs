// En ES Modules (ESM) se usa `export` para exponer datos o funcionalidades.
//
// A diferencia de CommonJS, ESM permite exportaciones nombradas y por defecto
// de forma nativa.

// -------------------------------
// Exportaciones nombradas
// -------------------------------
export const sistema = 'ESModule'

export function mjsMessage() {
  console.log('Mensaje desde un módulo ESModule')
}

// -------------------------------
// Exportación por defecto
// -------------------------------
// Un módulo ESM puede tener UNA sola exportación por defecto.
// No necesita nombre al exportarse.
//
// export default function defaultMessage() {
//   console.log('Mensaje desde la exportación por defecto')
// }
