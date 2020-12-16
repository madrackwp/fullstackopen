import React from 'react'

const Sum = (props) => {
    // let sum = 0
    // props.parts.forEach(
    //     part => {
    //         sum+=part.exercises
    //     }
    // )
    const parts = props.parts
    let sum = parts.reduce((sum, part) => {
        // console.log(sum, part.exercises);
        return sum+part.exercises
    },0)
    return( 
        <p>total of {sum} exercises</p>
    )
}

export default Sum