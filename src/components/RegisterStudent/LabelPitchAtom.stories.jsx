import LabelPitchAtom from "./LabelPitchAtom"

export default {
  title: 'LIA/RegisterStudent/LabelPitchAtom',
  component: LabelPitchAtom,
}

const Template = (args) => <LabelPitchAtom {...args}/>;

export const label = Template.bind({});
label.args={
  label:'Your sales pitch:'
}