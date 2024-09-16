// src/components/atoms/button/button.jsx
import React from 'react';

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>
    {text}
  </button>
);

export default Button;
