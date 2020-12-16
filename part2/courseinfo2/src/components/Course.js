import React from 'react'
import Content from './Content'
import Header from './Header'
import Sum from './Sum'

const Course = (props) => {
    return(
        <div>
            <Header header={props.course.name}/>
            <Content parts={props.course.parts}/>
            <Sum parts={props.course.parts}/>
        </div>
    )
}

export default Course