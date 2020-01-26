const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    // Expects to get back an array of note objects (array could be empty)
    const notes = loadNotes()
    // Look for note objects that already exist with same title
    const duplicateNotes = notes.filter((note) => note.title === title)
    if (duplicateNotes.length === 0) {
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
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
