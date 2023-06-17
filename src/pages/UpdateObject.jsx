import React from 'react'

function UpdateObject() {
  return (
    <div>UpdateObject</div>
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
