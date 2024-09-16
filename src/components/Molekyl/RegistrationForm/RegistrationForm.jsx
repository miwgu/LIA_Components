import React, { useState } from 'react';
import TextInput from '../../atoms/textinput/TextInput';  
import Button from '../../atoms/button/Button';   

const RegistrationForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pitch, setPitch] = useState('');
  const [linkedIn, setLinkedIn] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("firstname:", firstname);
    console.log("lastname:", lastname);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("pitch:", pitch);
    console.log("linkedIn:", linkedIn);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput label="First name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
      <TextInput label="Last name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
      <TextInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <TextInput label="Your sales pitch" type="text" value={pitch} onChange={(e) => setPitch(e.target.value)} />
      <TextInput label="LinkedIn" type="text" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
      <Button text="Register" />
    </form>
  );
};

export default RegistrationForm;
