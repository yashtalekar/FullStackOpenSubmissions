import React from 'react'

const Filter = (props) => {
    return (
        <div>
            filter show with: <input 
          value={props.newSearchString} 
          onChange={props.handleSearchStringChange}/>
        </div>
    )
}

export default Filter