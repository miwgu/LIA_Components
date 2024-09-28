import LabelFirstnameAtom from "./LabelFirstnameAtom"
import React from "react";
export default {
  title: 'LIA/RegisterStudent/LabelFirstnameAtom',
  component: LabelFirstnameAtom,
}

const Template = (args) => <LabelFirstnameAtom {...args}/>;

export const label = Template.bind({});
label.args={
  label:'First name:'
}