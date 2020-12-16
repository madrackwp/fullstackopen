import React from 'react'

const PhonebookEntry = ({person}) => {
    return(
        <p>{person.name} {person.num}</p>
    )  
}

export default PhonebookEntry