import React from 'react'
import EmailAtom from './EmailAtom'
import PasswordAtom from './PasswordAtom'
import LoginButtonAtom from './LoginButtonAtom'
import LoginLabelEmailAtom from './LoginLabelEmailAtom'




const Login = () => {
  return (
    <>
    <div>Login</div>
    <LoginLabelEmailAtom/>
    <EmailAtom />
   
    <PasswordAtom/>
    <LoginButtonAtom/>
    
    
    </>

  )
}

export default Login