import React from 'react';

import Modal from '../components/Modal';
import Button from '../components/Button';

function Welcome({ title }) {
  return (
    <div>Welcome to {title} </div>
  )
}

function Props() {
  return (
    <div>
      <Modal 
        title="Basic Modal" // string
        isOpen={false} // boolean
        colors={[1,2,3]} // array
        user={{
          firstName: 'truong',
          lastName: 'nguyen'
        }} // object
        onClick={() => {}} // function
        component={<Welcome title="Tony" />} // react function
        component2={Welcome} // pass direct react function
        welcomeTitle="truong"
      >
          this is chilren
      </Modal>
    </div>
  )
}

export default Props