import LabelEmailAtom from "./LabelEmailAtom"

export default {
  title: 'FWK/LabelEmailAtom',
  component: LabelEmailAtom,
}

const Template = (args) => <LabelEmailAtom {...args}/>;

export const label = Template.bind({});
label.args={
  label:'Email:'
}
