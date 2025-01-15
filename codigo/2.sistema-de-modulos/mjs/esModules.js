export function message() {
  console.log('Hola desde message() - esModules.js!')
}

export function message2() {
  console.log('Hola desde message2() - esModules.js!')
}

export default {
  message,
  message2,
}