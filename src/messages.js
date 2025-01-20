import { colorAll } from './colors.js'

export const MESSAGES = colorAll({
  usage:
    '\n💡 @gry/Uso:\n' +
    '\n@wht/Ejecutar un archivo:\n' +
    '-> @ylw/node cli.js run <file-name>\n\n' +
    '@wht/Ver la lista de archivos:\n' +
    '-> @ylw/node cli.js files\n\n' +
    '@wht/Ver la ruta de un archivo:\n' +
    '-> @ylw/node cli.js path <file-name>\n',

  filesTitle: '\n🗂️ @gry/Archivos:\n',

  fileNoExist:
    '\n❌ Archivo @cyn/{fileName} @wht/no encontrado.\n' +
    '\nUsa @ylw/node cli.js files @wht/para ver la lista de archivos.\n',

  filePath: '\n📁 Ruta del archivo: @cyn/{fileName}\n @wht/->',

  executingFile:
    '\n✅ Ejecutando archivo: @ylw/{fileName}' +
    '\n🔗 @wht/Ruta: @cyn/{filePath}\n' +
    '\n @ylw/@bld/Output:\n',

  runTimeError:
    '❌ @red/@bld/Error al ejecutar el archivo.@wht/' +
    '\n -> {err}' +
    '\n\n @yellow/Detalle: \n\n{detail}\n'
})
