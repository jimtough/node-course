const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Adding a new note (STUB FUNCTION) - title: [' + argv.title + '] | body: [' + argv.body + "]")
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note! (STUB FUNCTION)')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('Listing all notes! (STUB FUNCTION)')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read an existing note',
    handler: function () {
        console.log('Reading an existing note! (STUB FUNCTION)')
    }
})

// NOTE: The commands defined above will do nothing unless we trigger the yargs object.
//       The call below to console.log(yargs.argv) would have done this.
//       Explicitly invoking yargs.parse() is the typical way of doing it.
//console.log(yargs.argv)
yargs.parse()

// At this point, run the following command to run this script:
//    node app.js add --title="My note title" --body="My note body"
