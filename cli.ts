import { showHelp, exampleList, runExample } from './src/commands.ts'
import { MESSAGES } from './src/constants.ts'

function main() {
  const args = process.argv.slice(2)
  const command = args[0]
  const exampleName = args[1]
  const exampleArg = args[2]

  if (!command) {
    showHelp()
    return
  }

  if (command === 'list') {
    exampleList()
    return
  }

  if (command === 'run') {
    runExample(exampleName, exampleArg)
    return
  }

  console.log(MESSAGES.commandNotFound(command))
}

main()
