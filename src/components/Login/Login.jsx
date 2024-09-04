import React from 'react'
import EmailAtom from './EmailAtom'
import PasswordAtom from './PasswordAtom'
import LoginButtonAtom from './LoginButtonAtom'
import LoginLabelEmailAtom from './LoginLabelEmailAtom'
import LoginLabelPasswordAtom from './LoginLabelPasswordAtom'

const Login = () => {
  return (
    <>
    <div>Login</div>
    <LoginLabelEmailAtom/>
    <EmailAtom />
    <LoginLabelPasswordAtom/>
    <PasswordAtom/>
    <LoginButtonAtom/>
    
    
    </>

  )
}

export default Login