import React, { memo } from 'react'

function KeyComponent() {
  console.log('render Key Component')
  return (
    <div>KeyComponent</div>
  )
}

export default memo(KeyComponent)