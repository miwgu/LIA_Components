import LabelCommentAtom from "./LabelCommentAtom"

export default {
  title: 'FWK/LabelCommentAtom',
  component: LabelCommentAtom,
}

const Template = (args) => <LabelCommentAtom {...args}/>;

export const label = Template.bind({});
label.args={
  label:'Your comment:'
}