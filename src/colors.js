const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  line: '\x1b[4m',
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bgBlack: '\x1b[40m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m',
  gray: '\x1b[90m',
}

export function applyColor(styles, string) {
  if (!Array.isArray(styles)) {
    throw new Error('El primer argumento debe ser un array de estilos.')
  }

  if (typeof string !== 'string') {
    throw new Error('El segundo argumento debe ser una cadena de texto.')
  }

  let styleIndex = 0

  return (
    string.replace(/%%/g, () => {
      const currentStyle = colors[styles[styleIndex]] || ''
      styleIndex = (styleIndex + 1) % styles.length
      return currentStyle
    }) + colors.reset
  )
}
