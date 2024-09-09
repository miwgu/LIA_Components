import React from 'react'
import EmailAtom from '../Login/EmailAtom';
import LabelEmailAtom from '../Login/LabelEmailAtom';
import LabelPasswordAtom from '../Login/LabelPasswordAtom';
import PasswordAtom from '../Login/PasswordAtom';
import LabelFirstnameAtom from '../Register/LabelFirstnameAtom';
import FirstnameAtom from '../Register/FirstnameAtom';
import LabelLastnameAtom from '../Register/LabelLastnameAtom';
import LastnameAtom from '../Register/LastnameAtom';
import SalesPitchAtom from '../Register/SalesPitchAtom';
import LinkedInAtom from '../Register/LinkedInAtom';
import LabelLinkedinAtom from '../Register/LabelLinkedinAtom';
import LabelPitchAtom from '../Register/LabelPitchAtom';
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
      <LabelEmailAtom/>
      <EmailAtom/>
      <LabelPasswordAtom/>
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
