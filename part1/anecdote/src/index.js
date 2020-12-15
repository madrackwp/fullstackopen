import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0])
  const [mostVoted, setMostVoted] = useState(0)

  return (
    <div>
      <Header header = "Anecdote of the day"/>
      {props.anecdotes[selected]}<br/>
      has {points[selected]} votes
      <Button text = "next anecdote" handleClick={() => {setSelected(Math.floor((Math.random()*5)+1))}}/>
      <Button text = "vote" handleClick = {() => {voted(selected)}}/>
      <Header header = "Anecdote with most votes"/>
      {props.anecdotes[mostVoted]}<br/>
      has {points[mostVoted]} votes
    </div>
  )

  function voted(selected){
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)

    if (copy[selected] > mostVoted){
      setMostVoted(selected)
    }
  }
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.header}
      </h1>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)