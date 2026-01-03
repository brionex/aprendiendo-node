import util from 'node:util'

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[38;5;203m',
  green: '\x1b[38;5;114m',
  blue: '\x1b[38;5;111m',
  yellow: '\x1b[38;5;186m'
}

const parser = (args) => {
  return args
    .map((arg) => {
      if (typeof arg === 'object') {
        return util.inspect(arg)
      }
      return arg
    })
    .join(' ')
}

export const logger = {
  log: (...args) => console.log(parser(args)),

  info: (...args) => console.log(colors.blue + parser(args) + colors.reset),

  warn: (...args) => console.log(colors.yellow + parser(args) + colors.reset),

  error: (...args) => console.log(colors.red + parser(args) + colors.reset),

  success: (...args) => console.log(colors.green + parser(args) + colors.reset)
}
