
import React from 'react';

// styles
import styles from './card.module.css';

function Card() {
  console.log('render Card')
  return (
    <div className={styles.primary}>Card</div>
  )
}

export default Card