import React from 'react';
import LogoutButton from './LogoutButton';

export default {
  title: 'LIA/Navbar/LogoutButton',
  component: LogoutButton,
};

const Template = (args) => <LogoutButton {...args} />;

export const DefaultLogoutButton = Template.bind({});
DefaultLogoutButton.args = {
  onClick: () => alert('Du har loggats ut!'), 
};
