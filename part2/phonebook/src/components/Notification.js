import React from 'react'


const Notification = ({ addedName, addedNew }) => {
  if (addedNew === false) {
    return null
  }

  return (
    <div className="addedNotification">
      {`Added ${addedName}`}
    </div>
  )
}

export default Notification