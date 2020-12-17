import React from 'react'

const PhonebookEntry = ({person, deletePerson}) => {
    return(
        <p>
            {person.name} {person.num} <button onClick={()=> deletePerson(person)}>delete</button>
        </p>
    )  
}

export default PhonebookEntry