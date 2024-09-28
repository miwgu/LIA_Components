import LabelLastnameAtom from "./LabelLastnameAtom"
import React from "react";
export default {
  title: 'LIA/RegisterStudent/LabelLastnameAtom',
  component: LabelLastnameAtom,
}

const Template = (args) => <LabelLastnameAtom {...args}/>;

export const label = Template.bind({});
label.args={
  label:'Last name:'
}