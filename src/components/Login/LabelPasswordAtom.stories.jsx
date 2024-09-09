import {LabelPasswordAtom} from '.';

export default {
  title: 'FWK/LabelPasswordAtom',
  component: LabelPasswordAtom,
};

const Template = (args) => <LabelPasswordAtom {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Password:',
};
