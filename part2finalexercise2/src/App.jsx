import Phonebook from './components/Phonebook'
import Form from './components/Form'
import Search from './components/Search'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchResult] = useState('')
  const [res, setRes] = useState([]) 

  
  const addName = (event) => {
    event.preventDefault()

    const name = {
      name: newName,
      number: newNumber
    }

    if (persons.map(m => m.name).includes(newName) === true) {
      alert(`${newName} is already added to the phonebook`)
      return 
    } else {
      setPersons(persons.concat(name))
      setNewName('')
      setNewNumber('')
    }
  
  }

  const enterName = (event) => {
    setNewName(event.target.value)
  }

  const enterNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const enterSearch = (event) => {
    setSearchResult(event.target.value)
  }

  const search = () => {
    const r = persons.map(m => m.name)
    const yyy = r.filter(n => n == searchName)
        
    
    setRes(res.concat(yyy))
  }

  return (
    <div>
      
      <Search persons={persons} enterName={enterName}
       searchName={searchName} search={search} setRes={setRes} res={res} 
       enterSearch={enterSearch} />
      
      
      <Phonebook persons={persons}/>
      <Form addName={addName} newName={newName} 
      enterName={enterName} enterNumber={enterNumber}
      newNumber={newNumber}/>
      <h2>Numbers</h2>
   
    </div>
  )
}

export default App