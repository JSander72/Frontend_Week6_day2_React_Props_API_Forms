import React from 'react'

const ReusableButton = ({ handleClick, title ="click me", selectedUserID = '1' }) => {

  // Let's give the button some styling 
  // We can use the style attribute to add inline styling 
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius: '10px',
    border: 'none'
  }

  // Time for functionality 😎
  const handleClick2 = () => {
    alert("You clicked the button")
  }

  return (
    <div>
      <button style={buttonStyle} onClick={handleClick}>{title}</button>
    </div>
  )
}

export default ReusableButton