import React from 'react'

/*
ref
- use to store information during component render
- way to acces node DOM
- don't cause component re-render when update Ref
*/

function UseRef() {
  // states
  const [forceUpdate, setForceUpdate] = React.useState(Date.now());
  // refs
  const refNumber = React.useRef(0);
  const isSkipFirstRenderRef = React.useRef(true);
  const refInput = React.useRef(null);

  React.useEffect(() => {
    if(isSkipFirstRenderRef.current) {
      isSkipFirstRenderRef.current = false;
      return;
    }

    // code logic 
    console.log('UseRef --------------> useEffect')
  }, [forceUpdate])

  function handleForceUpdate() {
    refNumber.current += 10
    setForceUpdate(Date.now())
    refInput.current.focus();
    refInput.current.setSelectionRange(0, refInput.current.value.length)
  }

  console.log('UseRef ---------->', { refNumber })

  return (
    <div>
      Number: {refNumber.current}

      <input type="text" defaultValue="tony nguyen" ref={refInput} />
      <button type="button" onClick={handleForceUpdate}>Force Update</button>

    </div>
  )
}

export default UseRef