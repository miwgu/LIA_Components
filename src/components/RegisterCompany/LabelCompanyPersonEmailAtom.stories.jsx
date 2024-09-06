import LabelCompanyPersonEmailAtom from "./LabelCompanyPersonEmailAtom"

export default {
  title: 'FWK/LabelCompanyPersonEmailAtom',
  component: LabelCompanyPersonEmailAtom,
}

const Template = (args) => <LabelCompanyPersonEmailAtom {...args}/>;

export const label = Template.bind({});
label.args={
  label:'Responsible person E-mail:'
}