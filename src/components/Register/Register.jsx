import EmailAtom from '../Login/EmailAtom';
import LabelEmailAtom from '../Login/LabelEmailAtom';
import LabelPasswordAtom from '../Login/LabelPasswordAtom';

import PasswordAtom from '../Login/PasswordAtom';
import FirstnameAtom from './FirstnameAtom';
import LastnameAtom from './LastnameAtom';
import LinkedInAtom from './LinkedInAtom';
import RegisterButtonAtom from './RegisterButtonAtom';
import SalesPitchAtom from './SalesPitchAtom';

const Register = () => {
  return (
    <>
      <div>Register</div>
      <FirstnameAtom/>
      <LastnameAtom/>
      <LabelEmailAtom/>
      <EmailAtom/>
      <LabelPasswordAtom/>
      <PasswordAtom/>
      <SalesPitchAtom/>
      <LinkedInAtom/>
      <RegisterButtonAtom/>
      
    </>
  )
}

export default Register