import React from "react";
const TextInput = ({ label, value, onChange, type = "text" }) => (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
  
  export default TextInput;
  
