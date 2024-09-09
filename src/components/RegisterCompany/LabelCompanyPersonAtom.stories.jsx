import LabelCompanyPersonAtom from "./LabelCompanyPersonAtom"

export default {
  title: 'FWK/LabelCompanyPersonAtom',
  component: LabelCompanyPersonAtom,
}

const Template = (args) => <LabelCompanyPersonAtom {...args}/>;

export const label = Template.bind({});
label.args={
  label:'Responsible person name:'
}