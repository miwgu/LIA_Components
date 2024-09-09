import React from 'react'

const EditButtonAtom = ({ title = "Edit" }) => {
  if (!title) {
    return <div>You need to Add title for this button</div>;
  }
  return <button>{title}</button>;
}

export default EditButtonAtom
