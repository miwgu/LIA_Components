import LabelFirstnameAtom from "./LabelFirstnameAtom"

export default {
  title: 'LIA/RegisterStudent/LabelFirstnameAtom',
  component: LabelFirstnameAtom,
}

const Template = (args) => <LabelFirstnameAtom {...args}/>;

export const label = Template.bind({});
label.args={
  label:'First name:'
}