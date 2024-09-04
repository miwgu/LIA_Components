import React from 'react'
import EmailAtom from './EmailAtom'
import PasswordAtom from './PasswordAtom'
import LoginButtonAtom from './LoginButtonAtom'
import LabelEmailAtom from './LabelEmailAtom'
import LabelPasswordAtom from './LabelPasswordAtom'
import StudentRegLinkAtom from './StudentRegLinkAtom'
import CompanyRegLinkAtom from './CompanyRegLinkAtom'



const Login = () => {
  return (
    <>
    <div>Login</div>
    <LabelEmailAtom/>
    <EmailAtom />
    <LabelPasswordAtom/>
    <PasswordAtom/>
    <LoginButtonAtom/>
    <ul>
        <li><StudentRegLinkAtom/></li>
        <li><CompanyRegLinkAtom/></li>
    </ul>
    
    
    </>

  )
}

export default Login