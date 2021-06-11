import React from 'react'

const Filter = (props) => {
    return (
        <div>
            find countries: <input 
          value={props.newSearchString} 
          onChange={props.handleSearchStringChange}/>
        </div>
    )
}

export default Filter