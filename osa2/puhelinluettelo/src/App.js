import React, { useState } from 'react'
import Name from './components/Name'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
    }
    const nameArray = persons.map(person => person.name)
    if (nameArray.includes(nameObject.name)) {
      window.alert(`${nameObject.name} is already added to phonebook`)
    }
    else {
          setPersons(persons.concat(nameObject))
    }
    setNewName('')
  }

  const handleArrayChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: 
          <input
          value={newName}
          onChange={handleArrayChange}
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((name, key) => 
          <Name key={key} name={name}/>
        )}
      </div>
    </div>
  )

}

export default App