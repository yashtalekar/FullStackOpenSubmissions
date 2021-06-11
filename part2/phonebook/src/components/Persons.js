import React from 'react'

const Person = ({name, number, deleteNumber}) => {
    return (
      <p>{name} {number} <button onClick={deleteNumber}> delete</button></p>
    )
  }

const Persons = (props) => {
    return (
        <div>
        {props.filteredPersons.map(person => 
          <Person key={person.id} name={person.name} number={person.number} 
          deleteNumber={() => props.deleteNumber(person.id, person.name)}/>)}
      </div>
    )
}

export default Persons