export const ANSIColors = {
  style: {
    reset: '\x1b[0m',
    bold: '\x1b[1m',
    dim: '\x1b[2m',
    underline: '\x1b[4m',
    inverse: '\x1b[7m'
  },

  fg: {
    black: '\x1b[38;5;242m',
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
    black: '\x1b[48;5;236m',
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
type BgMethods = BgMethod<BgKeys>

export type ColorApi = { [K in StyleKeys]: ColorApi } & {
  [K in FgKeys]: ColorApi
} & { [K in BgMethods]: ColorApi } & {
  str: string
}

// Color function implementation
export function color(text: string): ColorApi {
  if (typeof text !== 'string') {
    console.log(color('COLOR ERROR:').red.str)
    throw new TypeError('El argumento de color() debe ser de tipo string.')
  }

  let open = ''
  const close = ANSIColors.style.reset

  const api = {} as ColorApi

  for (const entryGroups of Object.entries(ANSIColors)) {
    const [groupKey, colors] = entryGroups

    for (const entryColor of Object.entries(colors)) {
      const [colorKey, value] = entryColor
      const key =
        groupKey === 'bg'
          ? `bg${colorKey[0].toUpperCase()}${colorKey.slice(1)}`
          : colorKey

      Object.defineProperty(api, key, {
        get() {
          open += value
          return api
        }
      })
    }
  }

  Object.defineProperty(api, 'str', {
    get() {
      return `${open}${text}${close}`
    }
  })

  return api
}
