export const ANSIColors = {
  style: {
    reset: '\x1b[0m',
    bold: '\x1b[1m',
    dim: '\x1b[2m',
    underline: '\x1b[4m',
    inverse: '\x1b[7m'
  },

  fg: {
    black: '\x1b[38;5;238m',
    red: '\x1b[38;5;203m',
    green: '\x1b[38;5;114m',
    yellow: '\x1b[38;5;186m',
    blue: '\x1b[38;5;111m',
    magenta: '\x1b[38;5;176m',
    cyan: '\x1b[38;5;117m',
    white: '\x1b[38;5;255m',
    gray: '\x1b[38;5;245m'
  },

  bg: {
    black: '\x1b[48;5;235m',
    red: '\x1b[48;5;52m',
    green: '\x1b[48;5;22m',
    yellow: '\x1b[48;5;58m',
    blue: '\x1b[48;5;24m',
    magenta: '\x1b[48;5;53m',
    cyan: '\x1b[48;5;23m',
    white: '\x1b[48;5;252m'
  }
} as const

// Types
type StyleKeys = keyof typeof ANSIColors.style
type FgKeys = keyof typeof ANSIColors.fg
type BgKeys = keyof typeof ANSIColors.bg
type BgMethod<K extends string> = `bg${Capitalize<K>}`

export type ColorApi = { [K in StyleKeys]: ColorApi } & {
  [K in FgKeys]: ColorApi
} & { [K in BgMethod<BgKeys>]: ColorApi } & { str: string }

// Color builder
export function color(text: string): ColorApi {
  if (typeof text !== 'string') {
    throw new TypeError('El argumento de color() debe ser string.')
  }

  const codes: string[] = []
  const reset = ANSIColors.style.reset

  const api = {} as ColorApi

  const define = (key: string, value: string) => {
    Object.defineProperty(api, key, {
      get() {
        codes.push(value)
        return api
      }
    })
  }

  // styles
  for (const [key, value] of Object.entries(ANSIColors.style)) {
    define(key, value)
  }

  // foreground
  for (const [key, value] of Object.entries(ANSIColors.fg)) {
    define(key, value)
  }

  // background
  for (const [key, value] of Object.entries(ANSIColors.bg)) {
    const method = `bg${key[0].toUpperCase()}${key.slice(1)}`
    define(method, value)
  }

  Object.defineProperty(api, 'str', {
    get() {
      return `${codes.join('')}${text}${reset}`
    }
  })

  return api
}
