import LabelCompanyNameAtom from "./LabelCompanyNameAtom"
import React from "react";

export default {
  title: 'LIA/RegisterCompany/LabelCompanyNameAtom',
  component: LabelCompanyNameAtom,
}

const Template = (args) => <LabelCompanyNameAtom {...args}/>;

export const label = Template.bind({});
label.args={
  label:'Company name:'
}