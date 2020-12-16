import React from 'react'
import Part from './Part'

const Content = (props) => {
   return(
       <ul>
           {props.parts.map(
               (part) => <Part key={part.id} name={part.name} exercises={part.exercises}/>
           )}
       </ul>
   )
}

export default Content
