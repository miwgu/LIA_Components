import LabelLinkedinAtom from "./LabelLinkedinAtom"

export default {
  title: 'LIA/Register/LabelLinkedinAtom ',
  component: LabelLinkedinAtom ,
}

const Template = (args) => <LabelLinkedinAtom  {...args}/>;

export const label = Template.bind({});
label.args={
  label:'Linkedin:'
}
