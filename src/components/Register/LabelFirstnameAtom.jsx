import React from 'react'

const LabelFirstnameAtom = ({label="First name:"}) => {
  return (
    <div>
      <label htmlFor="text">{label}</label>
    </div>
  )
}

export default LabelFirstnameAtom
