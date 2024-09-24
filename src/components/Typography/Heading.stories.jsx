import React from 'react';
import Heading from './Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const H1 = Template.bind({});
H1.args = {
  level: 1,
  children: 'This is an H1 Heading',
};

export const H2 = Template.bind({});
H2.args = {
  level: 2,
  children: 'This is an H2 Heading',
};

export const H3 = Template.bind({});
H3.args = {
  level: 3,
  children: 'This is an H3 Heading',
};

export const H4 = Template.bind({});
H4.args = {
  level: 4,
  children: 'This is an H4 Heading',
};

export const H5 = Template.bind({});
H5.args = {
  level: 5,
  children: 'This is an H5 Heading',
};

export const H6 = Template.bind({});
H6.args = {
  level: 6,
  children: 'This is an H6 Heading',
};
