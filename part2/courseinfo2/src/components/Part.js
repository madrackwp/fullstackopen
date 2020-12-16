import React from 'react'

const Part = (props) =>{
    return(
        <li>
            {props.name} {props.exercises}
        </li>
    )
}

export default Part