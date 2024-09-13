import LabelEmailAtom from "./LabelEmailAtom";

export default {
  title: 'LIA/Login/LabelEmailAtom',
  component: LabelEmailAtom,
}

const Template = (args) => <LabelEmailAtom {...args}/>;

export const label = Template.bind({});
label.args={
  label:'Email:'
}
