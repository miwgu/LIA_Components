import LabelCompanyPersonAtom from "./LabelCompanyPersonAtom"
import React from "react";

export default {
  title: 'LIA/RegisterCompany/LabelCompanyPersonAtom',
  component: LabelCompanyPersonAtom,
}

const Template = (args) => <LabelCompanyPersonAtom {...args}/>;

export const label = Template.bind({});
label.args={
  label:'Responsible person name:'
}