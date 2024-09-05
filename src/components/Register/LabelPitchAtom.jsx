import React from 'react'

const LabelPitchAtom = ({label="Your sales pitch:"}) => {
  return (
    <div>
      <label htmlFor="text">{label}</label>
    </div>
  )
}

export default LabelPitchAtom
