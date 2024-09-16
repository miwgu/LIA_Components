import LabelCommentAtom from "./LabelCommentAtom"

export default {
  title: 'LIA/RegisterCompany/LabelCommentAtom',
  component: LabelCommentAtom,
}

const Template = (args) => <LabelCommentAtom {...args}/>;

export const label = Template.bind({});
label.args={
  label:'Your comment:'
}