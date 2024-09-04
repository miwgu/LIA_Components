import React from 'react'
import EmailAtom from './EmailAtom'
import PasswordAtom from './PasswordAtom'
import LoginButtonAtom from './LoginButtonAtom'

const Login = () => {
  return (
    <>
    <div>Login</div>
    <EmailAtom />
    <PasswordAtom/>
    <LoginButtonAtom/>
    </>

  )
}

export default Login