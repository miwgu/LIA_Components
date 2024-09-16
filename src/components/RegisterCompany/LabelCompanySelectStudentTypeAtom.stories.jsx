import LabelCompanySelectStudentTypeAtom from "./LabelCompanySelectStudentTypeAtom"

export default {
  title: 'LIA/RegisterCompany/LabelCompanySelectStudentTypeAtom',
  component: LabelCompanySelectStudentTypeAtom,
}

const Template = (args) => <LabelCompanySelectStudentTypeAtom {...args}/>;

export const label = Template.bind({});
label.args={
  label:'Select student type:'
}