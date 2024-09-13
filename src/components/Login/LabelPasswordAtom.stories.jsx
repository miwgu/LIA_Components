import LabelPasswordAtom from "./LabelPasswordAtom";

export default {
  title: 'LIA/Login/LabelPasswordAtom',
  component: LabelPasswordAtom,
};

const Template = (args) => <LabelPasswordAtom {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Password:',
};
