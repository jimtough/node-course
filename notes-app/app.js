const getNotes = require('./notes.js')
const chalk = require('chalk')

const msg = getNotes()

console.log(msg)
console.log(chalk.green('Success!'))
console.log(chalk.white.bgGreen.bold('Great Success!!'))
console.log(chalk.green.inverse('green inverse'))
