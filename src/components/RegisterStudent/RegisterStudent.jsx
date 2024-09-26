import EmailAtom from '../Login/EmailAtom';
import PasswordAtom from '../Login/PasswordAtom';
import FirstnameAtom from './FirstnameAtom';
import LabelFirstnameAtom from './LabelFirstnameAtom';
import LabelLastnameAtom from './LabelLastnameAtom';
import LabelLinkedinAtom from './LabelLinkedinAtom';
import LabelPitchAtom from './LabelPitchAtom';
import LastnameAtom from './LastnameAtom';
import LinkedInAtom from './LinkedInAtom';
import RegisterButtonAtom from './RegisterButtonAtom';
import SalesPitchAtom from './SalesPitchAtom';
import styles from './RegisterStudent.module.css';
import { useState } from 'react'; 
import mockData from "../../data/mockData.json";




const RegisterStudent = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [salesPitch, setSalesPitch] = useState('');
  const [linkedin, setLinkedin] = useState('');

  const handleRegister = () => {
    const newUser = {
      firstname,
      lastname,
      email,
      password,
      salesPitch,
      linkedin
    };
  
    console.log('Registrerar användare:', newUser);
  
    // Kontrollera om användaren redan finns i mockdata
    const existingUser = mockData.find(user => user.email === newUser.email);
    if (existingUser) {
      console.error('Användare med denna e-post finns redan!');
    } else {
      console.log('Ny användare registrerad:', newUser);
    }
  };


  return (
    <div className={styles.regContainer}>
      <h1>Register as student</h1>
      <LabelFirstnameAtom />
      <FirstnameAtom onChange={e => setFirstname(e.target.value)} />
      <LabelLastnameAtom />
      <LastnameAtom onChange={e => setLastname(e.target.value)} />
      <EmailAtom onEmailChange={setEmail} />
      <PasswordAtom onPasswordChange={setPassword} />
      <LabelPitchAtom />
      <SalesPitchAtom onChange={e => setSalesPitch(e.target.value)} />
      <LabelLinkedinAtom />
      <LinkedInAtom onChange={e => setLinkedin(e.target.value)} />
      <RegisterButtonAtom title="Registrera" onClick={handleRegister} />
    </div>
      
    
  )
}

export default RegisterStudent