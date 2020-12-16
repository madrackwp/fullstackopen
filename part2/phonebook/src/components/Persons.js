import React from 'react'
import PhonebookEntry from './PhonebookEntry'

const Persons = (props) => {
    return(
        <div>
            {props.persons.map(person => <PhonebookEntry person={person}/>)}
        </div>
    )
}

export default Persons