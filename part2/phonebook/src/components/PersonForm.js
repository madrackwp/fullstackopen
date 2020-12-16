import React from 'react'

const PersonForm = (props) => {
    return(
        <form onSubmit={props.addNewName}>
        <div>
          name: <input value={props.newName} onChange={props.handleNameChange}/>
        </div>
        <div>
            number: <input value={props.newNum} onChange={props.handleNumChange}></input>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
    )

}

export default PersonForm