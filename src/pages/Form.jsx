import React from 'react'
import Button from '../components/Button'

function Form() {
  // states
  const [form, setForm] = React.useState({
    lastName: '',
    age: 18,
    gender: 'male'
  })
  // refs
  const firstNameRef = React.useRef(null)

  function handleClick() {
    console.log('click', {
      firstName: firstNameRef.current.value,
      form
    })
  }

  function onChange(e) {
    const { name, value } = e.target; // destructuring
    setForm(prevState => {
      return {
        ...prevState,
        // [e.target.name]: e.target.value
        [name]: value
      }
    })
  }
  
  return (
    <div>
      <h4>Uncontroller Component</h4>
      <input id="firstName" defaultValue="truong" ref={firstNameRef} type="text" />

      <h4>Controller Component</h4>
      <input name="lastName" type="text" value={form.lastName} onChange={onChange} />
      <input name="age" type="text" value={form.age} onChange={onChange} />
      <select name="gender" value={form.gender}  onChange={onChange} >
        <option value="male">Male</option>
        <option value="female">Female Gender</option>
      </select>
      
      <br />
      <Button handleClick={handleClick} />
    </div>
  )
}

export default Form