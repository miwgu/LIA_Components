import React from 'react';

const LabelPasswordAtom = ({ label= "Password:" }) => {
  return (
    <label htmlFor= "password">{label}</label>
  );
};

export default LabelPasswordAtom;