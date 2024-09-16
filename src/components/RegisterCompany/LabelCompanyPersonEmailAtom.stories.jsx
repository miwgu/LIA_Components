import LabelCompanyPersonEmailAtom from "./LabelCompanyPersonEmailAtom"

export default {
  title: 'LIA/RegisterCompany/LabelCompanyPersonEmailAtom',
  component: LabelCompanyPersonEmailAtom,
}

const Template = (args) => <LabelCompanyPersonEmailAtom {...args}/>;

export const label = Template.bind({});
label.args={
  label:'Responsible person E-mail:'
}