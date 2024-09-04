import React from 'react'
import EmailAtom from './EmailAtom'
import PasswordAtom from './PasswordAtom'
import LoginButtonAtom from './LoginButtonAtom'
import LoginLabelEmailAtom from './LoginLabelEmailAtom'
import LoginLabelPasswordAtom from './LoginLabelPasswordAtom'
import StudentRegLinkAtom from './StudentRegLinkAtom'
import CompanyRegLinkAtom from './CompanyRegLinkAtom'




const Login = () => {
  return (
    <>
    <div>Login</div>
     <LoginLabelEmailAtom/> 
     <EmailAtom />
    <LoginLabelPasswordAtom/>
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