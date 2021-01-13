import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <tbody>
        <tr>
        <td>No feedback given</td>
        </tr>
      </tbody>
    )
  }
  return (
    <tbody>
    <StatisticLine text = "good" value = {props.good} />
    <StatisticLine text="neutral" value = {props.neutral} />
    <StatisticLine text="bad" value = {props.bad} />
    <StatisticLine text="all" value = {props.all} />
    <StatisticLine text="average" value = {(props.good*1+props.bad*-1)/(props.all)} />
    <StatisticLine text="positive" value = {props.good/(props.all)*100} percent = "%"/>
    </tbody>
  )
}

const StatisticLine = (props) => {
  if (props.text === "positive") {
    return (
        <tr>
         <td>{props.text}</td><td>{Math.round(props.value * 10) / 10}{props.percent}</td> 
        </tr>
      
    )
  }

  return (
      <tr>
        <td>{props.text}</td> 
        <td>{Math.round(props.value * 10) / 10}</td>
      </tr>
      
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(allFeedback + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allFeedback + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allFeedback + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={handleGoodClick} text='good' />
        <Button onClick={handleNeutralClick} text='neutral' />
        <Button onClick={handleBadClick} text='bad' />
      </div>
        <h1>statistics</h1>
      <table>
        <Statistics good = {good} neutral = {neutral} bad = {bad} all = {allFeedback} />
      </table>
        
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)