import React from 'react'

function UpdateObject() {
  const [messageObj, setMessageObj] = React.useState({
    author: '',
    message: {
      id: 1,
      text: ''
    }
  }); // memory A

  function handleChangeMessage(e) {
    const value = e.target.value;
    // const clonedMessgeObj = { ...messageObj }; // shallow clone
    // clonedMessgeObj.message = value; // memory C
    // setMessageObj(clonedMessgeObj)
    setMessageObj(prevState => {
      console.log('prevState: ', prevState)
      return {
        ...prevState, // copy all property
        message: {
          ...prevState.message,
          text: value
        }
      }
    })
  }

  console.log('render UpdateOjbect: ', messageObj)

  return (
    <div>
      <input 
        value={messageObj.message.text} 
        onChange={handleChangeMessage}
      />

    </div>
  )
}

export default UpdateObject

// const objA = {
//   name: 'truong'
// }; 
// const objB = {
//   age: 18,
//   firstName: 'nguyen',
//   name: 'vinh',
// }; 
// const objC = {
//   lastName: 'minh'
// };

 // tham trị: so sánh các giá trị vs nhau: string, number, boolean
//  const number = "123";
//  const numberA = "123";
//  console.log("tham tri: ", number === numberA)

//  // tham chiếu: so sánh các vùng nhớ vs nhau: object, array, function
//  console.log("tham chiếu: ", {
//    sosanh1: objA === objB, // false
//    sosanh2: objA === objD, // true
//    sosanh3: objA === objE // false
//  })

// /* merge object
//   - copy tat ca cac thuoc tinh cua object vs nhau (giữ nguyên)
//   - property sẽ bị overide lại nếu bị trùng.
// */
// // const mergedObj = Object.assign({}, objB, objA); // es5
// const mergedObj = {...objA, ...objB}; // es6 rest operator
// console.log('mergedObj: ', mergedObj)

// /* replace object
//   - nó sẽ tạo ra 1 object mới. Các property của object cũ sẽ bị mất đi
// */
// const replacedObject = {
//   ...objA, // copy all property of objectA
//   ...objB, // copy all property of objectB
//   color: 'red'
// }

// console.log('replacedObject: ', replacedObject)

// immutable & mutable
// const total = 20; // inital value
// function sum(x, y) {
//   const newTotal = total + x + y; // immutable;
//   // total = x + y; // mutable initial value
//   return newTotal;
// }
// const res = sum(21, 30);

// function divide(number) {
//   return number % 2 === 0;
// }
// const resDivide = divide(total);

// console.log('sum: ', { total, res, resDivide })
