const chalk = require('chalk')
const fs = require('fs')

const addNote = (title, body) => {
    // Expects to get back an array of note objects (array could be empty)
    const notes = loadNotes()
    // Look for first note object that exists with same title (if any exists)
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    // NOTE: Either of the 'if' statements below would work here
    //if (duplicateNote === undefined) {
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added - title: [' + title + ']'))
    } else {
        console.log(chalk.red.inverse('Note already exists with title [' + title + ']'))
    }
}

const removeNote = (title) => {
    // Expects to get back an array of note objects (array could be empty)
    const notes = loadNotes()
    // Make a copy of the entire array of notes, minus the one we are removing
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed! | title: [' + title + ']'))
    } else {
        console.log(chalk.red.inverse('No note found! | title: [' + title + ']'))
    }
}

const listNotes = () => {
    // Expects to get back an array of note objects (array could be empty)
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
    // Expects to get back an array of note objects (array could be empty)
    const notes = loadNotes()
    // Look for first note object that exists with same title (if any exists)
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('No note found! | title: [' + title + ']'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        // return empty array if any exception occurs (file does not exist, file does not contain JSON data, etc.)
        return []
    }
}

// Exports an object whose properties are the functions in this file
module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}
