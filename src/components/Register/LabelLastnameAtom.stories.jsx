import LabelLastnameAtom from "./LabelLastnameAtom"

export default {
  title: 'LIA/Register/LabelLastnameAtom',
  component: LabelLastnameAtom,
}

const Template = (args) => <LabelLastnameAtom {...args}/>;

export const label = Template.bind({});
label.args={
  label:'Last name:'
}