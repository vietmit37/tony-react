import React from 'react'

function Modal({ component, component2: Component2, welcomeTitle, children }) {
  return (
    <div>
      Modal <br/>
      Component: {component} <br />
      Component2: <Component2 title={welcomeTitle}/>

      {children}
    </div>
  )
}

export default Modal