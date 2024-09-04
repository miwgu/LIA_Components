import React from 'react';

const LabelEmailAtom = ({ label="Email:" }) => {
  return (
    <label htmlFor= "email">{label}</label>
  );
};

export default LabelEmailAtom;