import React, { useEffect, useState } from 'react'
import Persons from './components/Persons'
import PersonsForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ notificationMessage, setNotificationMessage ] = useState('')
  const [ errorNotification, setErrorNotification ] = useState(false)


  const hook = () => {
    personService.getAll().then(initialContacts => {
      setPersons(initialContacts)})
  }

  useEffect(hook, [])

  const addNewName = (event) => {
    // console.log(persons)
    event.preventDefault()
    const newPerson = {name: newName, number: newNum}
    // console.log(newPerson)
    let dupChecker = false
    let id = -1
    let i;
    for (i=0; i<persons.length;i++){
        if (persons[i].name === newPerson.name){
            dupChecker = true;
            id = persons[i].id
        }
    }

    
    if (dupChecker && id >= 0){
        // window.alert(`${newName} is already added to phonebook`)
        if (window.confirm(`${newPerson.name} has already been added, replace the old number with a new one?`)){
          personService
            .update(newPerson,id)
            .then(updatedPerson => {
              setPersons(persons.map(person => person.id !== id ? person : updatedPerson))
              setNewNum('')
              setNewName('')
              setNotificationMessage(`${newPerson.name}'s number has been updated`)
              setTimeout(() => {
                setNotificationMessage('')
              },3000)
            })
            .catch(error => {
              setErrorNotification(true)
              setNotificationMessage(`${newPerson.name}'s details has already been removed`)
              setTimeout(() => {
                setNotificationMessage('')
                setErrorNotification(false)
              },3000)
              setPersons(persons.filter(person => person.id !== id))
            })
        }
    } else {
      personService
        .create(newPerson)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNum('')
          setNotificationMessage(`${newPerson.name} has been added`)
              setTimeout(() => {
                setNotificationMessage('')
              },5000)
        })
        .catch(error => {
          console.log('failed: ',error)
        })
    }    
  }

  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)){
      personService
      .remove(person.id)
      .then(setPersons(persons.filter(p => p.id !== person.id)))
      }
    }
   
  
  const handleNameChange = (event) => {
      // console.log(event.target.value)
      setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    // console.log(event.target.value)
    setNewNum(event.target.value)
  }

  const handleFilterChange = (event) => {
    // console.log(event.target.value)
    setFilter(event.target.value)
  }

  let personsToShow = persons.filter(
      (person) =>  person.name.toLowerCase().includes(filter.toLowerCase()) 
  )


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {notificationMessage} error={errorNotification}/>
      <Filter value={filter} handleFilterChange={handleFilterChange}/> 

      <h2>add a new</h2>   
     <PersonsForm addNewName={addNewName} newName={newName} handleNameChange={handleNameChange} newNum={newNum} handleNumChange={handleNumChange}/>

      <h2>Numbers</h2>
      <Persons persons={personsToShow} deletePerson={deletePerson}/>

    </div>
  )
}


export default App