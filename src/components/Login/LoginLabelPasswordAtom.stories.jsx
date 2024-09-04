import React from 'react';
import LoginLabelPasswordAtom from './LoginLabelPasswordAtom';

export default {
  title: 'FWK/LoginLabelPasswordAtom',
  component: LoginLabelPasswordAtom,
};

const Template = (args) => <LoginLabelPasswordAtom {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Password:',
};
