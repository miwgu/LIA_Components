import React from 'react'
import EmailAtom from './EmailAtom'
import PasswordAtom from './PasswordAtom'
import LoginButtonAtom from './LoginButtonAtom'
import CompanyRegLinkAtom from './CompanyRegLinkAtom'
import StudentRegLinkAtom from './StudentRegLinkAtom'

const Login = () => {
  return (
    <>
    <div>Login</div>
    <EmailAtom />
    <PasswordAtom/>
    <LoginButtonAtom/>
    <ul>
      <li>
        <CompanyRegLinkAtom/>
      </li>
      <li>
        <StudentRegLinkAtom/>
      </li>
    </ul>
    </>

  )
}

export default Login