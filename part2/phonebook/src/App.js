import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons';
import phonebookService from './services/phonebook'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearchString, setNewSearchString] = useState('')
  const [addedNew, setAddedNew] = useState(false)
  const [prevName, setPrevName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    //console.log('button clicked', event.target)
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      //setNewName('')
    } else {
      axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setPrevName(newName)
          setNewName('')
          setNewNumber('')
          console.log(newSearchString)
          console.log("name added and notification effect called")
          setAddedNew(true);
          console.log("time activated, waiting 3 seconds");
          const timer = setTimeout(() => {
               setAddedNew(false)  
            }, 3000)
        })
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchStringChange = (event) => {
    console.log(event.target.value)
    setNewSearchString(event.target.value)
    console.log(newSearchString)
  }

  const deleteNumber = (id, name) => {
    if (window.confirm(`Do you want to delete ${name}?`)) {
      phonebookService
        .del(id)
        .then(() =>
          phonebookService
            .getAll()
            .then(initialPersons => {
              setPersons(initialPersons)
            })

        )
    }
  }

  useEffect(() => {
    console.log("effect")
    phonebookService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })

  }, [])

  useEffect(() => {
    
    
  }, [prevName]) 

  const filteredPersons = persons.filter(person =>
    person.name.toLocaleLowerCase().includes(newSearchString.toLocaleLowerCase()))

  return (
    <div>
      <Notification addedName={prevName} addedNew={addedNew}/>
      <h2>Phonebook</h2>
      <Filter newSearchString={newSearchString} handleSearchStringChange={handleSearchStringChange} />
      <h3>add a new</h3>
      <PersonForm newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}
        handleFormSubmission={addName} 
        addedNew={addedNew}/>
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} deleteNumber={deleteNumber} />
    </div>
  )
}

export default App