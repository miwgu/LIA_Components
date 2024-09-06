import React from 'react'

const LabelCompanyPersonAtom = ({label="Responsible person name:"}) => {
  return (
    <div>
      <label htmlFor="text">{label}</label>
    </div>
  )
}

export default LabelCompanyPersonAtom
