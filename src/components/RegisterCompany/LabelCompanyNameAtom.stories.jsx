import LabelCompanyNameAtom from "./LabelCompanyNameAtom"

export default {
  title: 'FWK/LabelCompanyNameAtom',
  component: LabelCompanyNameAtom,
}

const Template = (args) => <LabelCompanyNameAtom {...args}/>;

export const label = Template.bind({});
label.args={
  label:'Company name:'
}