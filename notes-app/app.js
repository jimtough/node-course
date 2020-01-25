const getNotes = require('./notes.js')
const chalk = require('chalk')

const msg = getNotes()

console.log(msg)
console.log(chalk.green('Success!'))
console.log(chalk.red('Failed!'))
console.log(chalk.white.bgGreen.bold('Great Success!!'))
console.log(chalk.blue.inverse('blue inverse'))
