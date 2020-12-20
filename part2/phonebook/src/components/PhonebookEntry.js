import React from 'react'
import PersonForm from './PersonForm'

const PhonebookEntry = ({person, deletePerson}) => {
    return(
        <p key={person.name}>
            {person.name} {person.number} <button onClick={()=> deletePerson(person)}>delete</button>
        </p>
    )  
}

export default PhonebookEntry