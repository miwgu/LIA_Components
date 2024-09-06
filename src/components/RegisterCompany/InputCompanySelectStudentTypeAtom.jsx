import React from 'react'

const InputCompanySelectStudentTypeAtom = () => {
  return (
    <div>
       <select defaultValue="" aria-label="Select Student Type">
        <option value="" disabled>
          Select Student:
        </option>
        <option value="frontend">Frontend Developer</option>
        <option value="backend">Backend Developer</option>
        <option value="fullstack">Fullstack Developer</option>
        <option value="other">Other</option>
      </select>
    </div>
  )
}

export default InputCompanySelectStudentTypeAtom
