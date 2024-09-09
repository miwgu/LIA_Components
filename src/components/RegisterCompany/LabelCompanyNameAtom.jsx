import React from 'react'

const LabelCompanyNameAtom = ({label="Company name:"}) => {
  return (
    <div>
      <label htmlFor="text">{label}</label>
    </div>
  )
}

export default LabelCompanyNameAtom
