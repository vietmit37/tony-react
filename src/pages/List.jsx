import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';

// components
import Button from '../components/Button';

function List() {
  const [products, setProducts] = React.useState([
    {  name: 'banana', isFruit: true },
    {  name: 'iphone', isFruit: false },
    { name: 'mango', isFruit: true },
  ]);
  const [input, setInput] = React.useState('');

  function handleAddItem() {
    const item = {
      name: input,
      id: uuidv4(),
      isFruit: false
    }
    setProducts(prevState => {
      return [...prevState, item]
    })
  }

  function onChangeInput(e) {
    setInput(e.target.value)
  }
  
  const renderItems = products.map(product => {
    return {
      ...product,
      id: uuidv4()
    }
  }).map((product, index) => {
    return (
      <React.Fragment key={product.id}>
        <div
          style={{ 
            color: product.isFruit ? 'green' : 'red',
          }}
          // className={
          //   product.isFruit ? 'listItem fruit' : 'listItem other'
          // }
          // className={`listItem ${product.isFruit ? 'fruit' : 'other'}`}
          className={clsx(
            'listItem',
            product.isFruit ? 'fruit' : 'other',
            index % 2 === 0 ? 'odd' : 'even'
          )}
        >
          Id: {product.id} <br />
          Name: {product.name} <br />
          <Button text="Delete" />
        </div>
      </React.Fragment>
    )
  })

  return (
    <div>
      <input type="text" value={input} onChange={onChangeInput} />
      <Button 
        text="Add item"
        handleClick={handleAddItem}
      />
      {renderItems}
    </div>
  )
}

export default List

/*
[1, 2, 3, 4, 5]

UI:    1 2 3 4 5
index: 0 1 2 3 4
 
*/