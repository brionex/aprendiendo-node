import commands from './src/commands.js'

const args = process.argv.slice(2)

if (args.length === 0) commands.showHelp()
if (args[0] === 'files') commands.listFiles()
if (args[0] === 'path') commands.filePath(args[1])
if (args[0] === 'run') commands.executeFile(args[1])
