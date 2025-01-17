import { applyColor } from './colors.js'

export const MESSAGES = {
  usage: applyColor(
    ['gray', 'white', 'yellow', 'reset', 'yellow', 'reset', 'yellow'],
    '\n💡 %%Uso:\n' +
      '\n%%Ejecuta el archivo de un alias:\n' +
      '-> %%node main.js run <alias>%%\n\n' +
      'Ver la lista de alias:\n' +
      '-> %%node main.js alias%%\n\n' +
      'Ver la ruta de un alias:\n' +
      '-> %%node main.js path <alias>\n'
  ),

  aliasList: applyColor(['gray'], '\n🗂️ %%Alias:\n'),

  aliasNotFound: (alias) =>
    applyColor(
      ['red', 'bold', 'reset', 'cyan', 'reset'],
      '\n❌ Alias no encontrado: %%%%' +
        alias +
        '%%\nUsa %%node main.js alias%% para ver la lista de alias disponibles.\n'
    ),

  executingAlias: (alias, path) =>
    applyColor(
      ['green', 'bold', 'reset', 'yellow', 'bold'],
      '\n✅ Ejecutando alias: %%%%' +
        alias +
        '%%\n\n🔗 Ruta del archivo:\n' +
        path +
        '\n\n%%%%Output:\n'
    ),
}
