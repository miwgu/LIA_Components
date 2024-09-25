import React from 'react';
import BodyText from './BodyText';

export default {
  title: 'Typography/BodyText',
  component: BodyText,
};

const Template = (args) => <BodyText {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a paragraph with body text. It has a standard size and line-height.',
};
