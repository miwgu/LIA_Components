
import React from 'react';
import Button from './Button'; 

export default {
  title: 'LIA/Atom/Button',
  component: Button,
};

export const Default = (args) => <Button {...args} />;
Default.args = {
  text: '', 
};