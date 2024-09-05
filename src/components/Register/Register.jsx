import EmailAtom from '../Login/EmailAtom';
import LabelEmailAtom from '../Login/LabelEmailAtom';
import LabelPasswordAtom from '../Login/LabelPasswordAtom';

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

const Register = () => {
  return (
    <>
      <div>Register</div>
      <LabelFirstnameAtom/>
      <FirstnameAtom/>
      <LabelLastnameAtom/>
      <LastnameAtom/>
      <LabelEmailAtom/>
      <EmailAtom/>
      <LabelPasswordAtom/>
      <PasswordAtom/>
      <LabelPitchAtom/>
      <SalesPitchAtom/>
      <LabelLinkedinAtom/>
      <LinkedInAtom/>
      <RegisterButtonAtom/>
      
    </>
  )
}

export default Register