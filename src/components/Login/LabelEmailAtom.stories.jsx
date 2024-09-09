import {LabelEmailAtom} from "."

export default {
  title: 'FWK/LabelEmailAtom',
  component: LabelEmailAtom,
}

const Template = (args) => <LabelEmailAtom {...args}/>;

export const label = Template.bind({});
label.args={
  label:'Email:'
}
