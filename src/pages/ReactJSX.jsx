import React from 'react';

// components
import Button from '../components/Button';

function ReactJSX() {
  const number = 1 + 1;

  const renderTodoItem = (
    <div>
      Title: learn react
    </div>
  )

  // const renderItemFnc = () => {
  //   return (
  //     <div>
  //       Title: learn react
  //     </div>
  //   )
  // }
  const renderItemFnc = () => (
    <div>
      Title: learn react
    </div>
  )


  // JSX
  return (
    // top element level
    <> 
      <div>
        ReactJSX {number}
        {renderTodoItem}
        {renderItemFnc()}

        <Button text="Add Todo" number={1}  />

      </div>
      <div />
      <div></div>
      <div></div>
      <Button text="Find"  />

      <h3>elements must be closed</h3>      
      <br />
      <Button  />
      <input />
      
    </>
  )
}

export default ReactJSX;