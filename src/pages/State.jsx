import React from 'react'

// components
import Button from '../components/Button';
import Card from '../components/Card';
import KeyComponent from '../components/KeyComponent';

/*
How many ways to component re-render?
- state changes
- props changes
- parent component re-render
- forceUpdate (not recommended) - using by key 
*/

function State() {
  const [count, setCount] = React.useState(0); // local stage component
  const [forceUpdate, setForceUpdate] = React.useState(Date.now()); // local stage component

  function handleDecrement() {
    setCount(prevState => prevState - 1);
    setForceUpdate(Date.now());
  }

  console.log("render State component")

  return (
    <div>
      Count: {count}
      <br />
      <Button 
        text="Increment"
        number={count}
        handleClick={() => setCount(prevState => prevState + 1)}
      />
      <Button 
        text="Decrement"
        number={count}
        handleClick={handleDecrement}
      />

      <KeyComponent key={forceUpdate} />
      <Card />
    </div>
  )
}

export default State