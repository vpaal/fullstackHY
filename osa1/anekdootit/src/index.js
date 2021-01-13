import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const MostVoted = (props) => {
  var max = props.copy[0]
  var index = 0

  for (var i = 1; i < props.copy.length; i++) {
    if (props.copy[i] > max) {
        index = i
        max = props.copy[i]
    }
  }
  return (
    <div>
      <p>{props.anecdotes[index]}</p>
      <p>has {props.copy[index]} votes</p>
    </div>
  )
}

const points = Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0);
const copy = [...points]

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const randomizeNumber = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length))
  }

  const vote = () => {
    copy[selected] += 1
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {copy[selected]} votes</p>
      <p><Button onClick={vote} text='vote' /> <Button onClick={randomizeNumber} text='next anecdote' /></p>
      <h2>Anecdote with most votes</h2>
      <MostVoted copy = {copy} anecdotes = {anecdotes} selected = {selected} />
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
