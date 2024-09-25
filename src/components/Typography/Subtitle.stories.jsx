import React from 'react';
import Subtitle from './Subtitle';

export default {
  title: 'Typography/Subtitle',
  component: Subtitle,
};

const Template = (args) => <Subtitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a subtitle text',
};
