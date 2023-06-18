import React from 'react'
import Button from '../components/Button';

function HandleEvent() {
  const [count, setCount] = React.useState(0);

  function handleIncrement(number) {
    console.log('handleIncrement')
    setCount(prevState => prevState + number + 1)
  }

  // function handleDecrement() {
  //   return function() {
  //     console.log('handleDecrement')
  //     setCount(prevState => prevState - 1)
  //   }
  // }
  const handleDecrement = () => () => {
    console.log('handleDecrement')
    setCount(prevState => prevState - 1)
  }

  // pass 1 arrow function: user click -> trigger 1 cai {} => () => run handleIncrement (re-create 1 function mới)
  // pass direct function: user click -> run handleIncrement

  return (
    <div>
      Count: {count} <br />
      <Button 
        text="Increment"
        handleClick={() => handleIncrement(10)}
      />

      <Button 
        text="Decrement"
        handleClick={handleDecrement()}
      />
    </div>
  )
}

export default HandleEvent

// sum(2)(3) = 5