const fs = require('fs')

const getNotes = function() {
    return 'Your notes...'
}

const addNote = function(title, body) {
    // Expects to get back an array of note objects (array could be empty)
    const notes = loadNotes()
    // Look for note objects that already exist with same title
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added - title: [' + title + ']')
    } else {
        console.log('Note already exists - did not add | title: [' + title + ']')
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
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
    addNote: addNote
}
