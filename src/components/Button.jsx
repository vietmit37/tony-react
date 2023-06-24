/* eslint-disable react/prop-types */
import React from 'react'

// styles
import styles from './button.module.css';

// stateless component
function Button({ text = 'Submit', number = 1, handleClick }) {
  console.log('render Buton')
  return (
    <button 
      type="button" 
      onClick={handleClick}
      className={styles.primary}
    >
      {text + number}
    </button>
  )
}

export default Button