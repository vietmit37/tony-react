/* eslint-disable react/prop-types */
import React from 'react'

// stateless component
function Button({ text = 'Submit', number = 1, handleClick }) {
  console.log('render Buton')
  return (
    <button type="button" onClick={(handleClick)}>{text + number}</button>
  )
}

export default Button