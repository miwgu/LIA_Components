import React from 'react'

const LabelLastnameAtom = ({label="Last name:"}) => {
  return (
    <div>
      <label htmlFor="text">{label}</label>
    </div>
  )
}

export default LabelLastnameAtom
