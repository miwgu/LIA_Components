import React from 'react';
import LabelPasswordAtom from './LabelPasswordAtom';

export default {
  title: 'FWK/LabelPasswordAtom',
  component: LabelPasswordAtom,
};

const Template = (args) => <LabelPasswordAtom {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Password:',
};
