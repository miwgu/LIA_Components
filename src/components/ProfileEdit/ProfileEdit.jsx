import React from 'react'
import EmailAtom from '../Login/EmailAtom';
import PasswordAtom from '../Login/PasswordAtom';
import LabelFirstnameAtom from '../RegisterStudent/LabelFirstnameAtom';
import FirstnameAtom from '../RegisterStudent/FirstnameAtom';
import LabelLastnameAtom from '../RegisterStudent/LabelLastnameAtom';
import LastnameAtom from '../RegisterStudent/LastnameAtom';
import SalesPitchAtom from '../RegisterStudent/SalesPitchAtom';
import LinkedInAtom from '../RegisterStudent/LinkedInAtom';
import LabelLinkedinAtom from '../RegisterStudent/LabelLinkedinAtom';
import LabelPitchAtom from '../RegisterStudent/LabelPitchAtom';
import EditButtonAtom from './EditButtonAtom';
import DeleteButtonAtom from './DeleteButtonAtom';

const ProfileEdit = () => {
  return (
    <div>
      <h1>Edit my profile</h1>
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
      <EditButtonAtom/>
      <DeleteButtonAtom/>
    </div>
  )
}

export default ProfileEdit
