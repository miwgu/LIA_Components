import React from 'react';

const RegisterButtonAtom = ({ title = "Register" }) => {
  if (!title) {
    return <div>You need to Add title for this button</div>;
  }
  return <button>{title}</button>;
};

export default RegisterButtonAtom;
