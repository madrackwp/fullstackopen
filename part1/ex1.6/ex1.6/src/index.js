import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => (
  <tr>
    <td>{props.text} {props.qty}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  if (good===0 && neutral===0 && bad===0){
    return(
      <div>No feedback</div>  
    )
  }
  return(
    <table>
      <tbody>
        <Statistic text="good" qty={good}/>
        <Statistic text="neutral" qty={neutral}/>
        <Statistic text="bad" qty={bad}/>
        <Statistic text="all" qty={good+neutral+bad}/>
        <Statistic text="avg" qty={(good*1+neutral*0+bad*-1)/(good+neutral+bad)}/>
        <Statistic text="positive" qty={good/(neutral+bad+good)*100}/>
      </tbody>
    </table>
        
      
  )
}

const Button = (props) => {
  return(
    <div>
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {() => setGood(good + 1)} text="good"/>
      <Button handleClick = {() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick = {() => setBad(bad + 1)} text="bad"/>

      <h1>statistics</h1>
      <Statistics good = {good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)