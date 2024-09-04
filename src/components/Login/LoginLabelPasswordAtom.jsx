import React from 'react';

const LoginLabelPasswordAtom = ({ label= "Password:" }) => {
  return (
    <label htmlFor= "password">{label}</label>
  );
};

export default LoginLabelPasswordAtom;