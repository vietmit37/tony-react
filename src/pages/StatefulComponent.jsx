import { useState } from 'react'

import Button from '../components/Button';
function StatefulComponent() {
  const [count, setCount] = useState(1);

  function handleIncrement() {
    setCount(prevState => prevState + 1)
  }

  function handleDecrement() {
    setCount(prevState => prevState - 1)
  }

  console.log('StatefulComponent')

  return (
    <div>
      <h1>StatefulComponent</h1>
      <br />
      Count: {count} <br />
      <Button text="Increment" handleClick={handleIncrement} />
      <Button text="Decrement" handleClick={handleDecrement} />
    </div>
  )
}

export default StatefulComponent