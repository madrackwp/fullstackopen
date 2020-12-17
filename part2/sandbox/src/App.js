import './index.css'
import React,{ useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'
import Notification from './components/Notification'

const Footer = () => {
  const footerStyle = {
      color: 'green',
      fontStyle: 'italic',
      fontSize: 16
  }

  return (
      <div style={footerStyle}>
          <br/>
          <em>Note app, done by WP! :)</em>
      </div>
  )
}

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMsg, setErrorMsg] = useState('an error has occured')

  const hook = () => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }
  useEffect(hook, [])

  
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  } 

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id) //find the note from the arraylist of notes where the id is the one that was selected
    const changedNote = {...note, important: !note.important} // the '...' will copy the other properties from the other note object, only important is inverted

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMsg(
          `Note '${note.content}' was already removed from the server`
        )
        setTimeout(() => {
          setErrorMsg(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important )

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMsg}/>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map( note => 
          <Note 
            key={note.id} 
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value = {newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
      <Footer/>
    </div>
  )
}

export default App