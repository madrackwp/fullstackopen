import React, { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonsForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', num: '040-123456' },
        { name: 'Ada Lovelace', num: '39-44-5323523' },
        { name: 'Dan Abramov', num: '12-43-234345' },
        { name: 'Mary Poppendieck', num: '39-23-6423122' }
    ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ filter, setFilter ] = useState('')

  const addNewName = (event) => {
    console.log(persons)
    event.preventDefault()
    const newPerson = {name: newName, num: newNum}
    console.log(newPerson)
    
    let dupChecker = false
    let i;
    for (i=0; i<persons.length;i++){
        if (persons[i].name === newPerson.name){
            dupChecker = true;
        }
    }
    if (dupChecker){
        window.alert(`${newName} is already added to phonebook`)
    } else {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNum('')
    }    
  }

  const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    console.log(event.target.value)
    setNewNum(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  let personsToShow = persons.filter(
      (person) =>  person.name.toLowerCase().includes(filter) 
  )


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} handleFilterChange={handleFilterChange}/> 

      <h2>add a new</h2>   
     <PersonsForm addNewName={addNewName} newName={newName} handleNameChange={handleNameChange} newNum={newNum} handleNumChange={handleNumChange}/>

      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>
    </div>
  )
}


export default App