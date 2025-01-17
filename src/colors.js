const colors = {
  rst: '\x1b[0m', // Reset
  bld: '\x1b[1m', // Bold
  lin: '\x1b[4m', // Underline (line)
  blk: '\x1b[30m', // Black
  red: '\x1b[31m', // Red
  grn: '\x1b[32m', // Green
  ylw: '\x1b[33m', // Yellow
  blu: '\x1b[34m', // Blue
  mag: '\x1b[35m', // Magenta
  cyn: '\x1b[36m', // Cyan
  wht: '\x1b[37m', // White
  bgk: '\x1b[40m', // Background Black
  bgr: '\x1b[41m', // Background Red
  bgg: '\x1b[42m', // Background Green
  bgy: '\x1b[43m', // Background Yellow
  bgb: '\x1b[44m', // Background Blue
  bgm: '\x1b[45m', // Background Magenta
  bgc: '\x1b[46m', // Background Cyan
  bgw: '\x1b[47m', // Background White
  gry: '\x1b[90m', // Gray
}

// Colorear una cadena de texto
export function color(text) {
  if (typeof text !== 'string') {
    throw new Error('El segundo argumento debe ser una cadena de texto.')
  }

  return replaceColor(text)
}

// Colorear un array de strings o un objeto con claves y valores
export function colorAll(texts) {
  if (Array.isArray(texts)) {
    return texts.map((text) =>
      typeof text === 'string' ? replaceColor(text) : text
    )
  }

  if (typeof texts === 'object' && texts !== null) {
    const coloredTexts = {}
    for (const [key, value] of Object.entries(texts)) {
      coloredTexts[key] =
        typeof value === 'string' ? replaceColor(value) : value
    }
    return coloredTexts
  }

  throw new Error(
    'El argumento debe ser un array de strings o un objeto con claves y valores.'
  )
}

// Reemplazar el patron de color con el ascii de color correspondiente
function replaceColor(text) {
  const regex = /@([\w-]+)\//g

  return (
    text.replace(regex, (match, style) => {
      return colors[style] || ''
    }) + colors.rst
  )
}
