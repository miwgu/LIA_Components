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


const RegisterStudent = () => {
  return (
    <div className={styles.regContainer}>
      <h1>Register as student</h1>
      <LabelFirstnameAtom/>
      <FirstnameAtom/>
      <LabelLastnameAtom/>
      <LastnameAtom/>
      <EmailAtom/>
      <PasswordAtom/>
      <LabelPitchAtom/>
      <SalesPitchAtom/>
      <LabelLinkedinAtom/>
      <LinkedInAtom/>
      <RegisterButtonAtom/>
      
    </div>
  )
}

export default RegisterStudent