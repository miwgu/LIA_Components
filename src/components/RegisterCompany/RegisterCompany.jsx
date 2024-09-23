import PasswordAtom from '../Login/PasswordAtom';

import React from 'react'
import LabelCompanyNameAtom from "./LabelCompanyNameAtom"
import InputCompanyNameAtom from './InputCompanyNameAtom'
import LabelCompanyPersonAtom from './LabelCompanyPersonAtom'
import InputCompanyPersonAtom from './InputCompanyPersonAtom'
import LabelCompanyPersonEmailAtom from './LabelCompanyPersonEmailAtom'
import InputCompanyPersonEmailAtom from "./InputCompanyPersonEmailAtom"; 
import LabelCompanySelectStudentTypeAtom from "./LabelCompanySelectStudentTypeAtom"
import InputCompanySelectStudentTypeAtom from "./InputCompanySelectStudentTypeAtom"; 
import CommentAtom from './CommentAtom';
import LabelCommentAtom from './LabelCommentAtom'
import LabelHomepageLinkAtom from './LabelHomepageLinkAtom';
import HomepageLinkAtom from './HomepageLinkAtom';
import RegisterButtonAtom from './RegisterButtonAtom';

const RegisterCompany = () => {
  return (
    <div>
      <h1>Register as Company</h1>
      <LabelCompanyNameAtom/> 
      <InputCompanyNameAtom/>
      <LabelCompanyPersonAtom/>
      <InputCompanyPersonAtom/>
      <LabelCompanyPersonEmailAtom/>
      <InputCompanyPersonEmailAtom/>
      <PasswordAtom/>
      <LabelCompanySelectStudentTypeAtom/>
      <InputCompanySelectStudentTypeAtom/>
      <LabelCommentAtom/>
      <CommentAtom/>
      <LabelHomepageLinkAtom/>
      <HomepageLinkAtom/> 
      <RegisterButtonAtom/>

    </div>
  )
}

export default RegisterCompany
