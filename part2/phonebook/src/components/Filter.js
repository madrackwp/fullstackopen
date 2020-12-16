import React,{useState} from 'react'

const Filter = (props) => {
    // const [ filter, setFilter ] = useState('')

    // const handleFilterChange = (event) => {
    //     console.log(event.target.value)
    //     // setFilter(event.target.value)
    //   }

    return (
        <div>
            filter shown with <input value={props.filter} onChange={props.handleFilterChange}/>
        </div>
    )
}

export default Filter