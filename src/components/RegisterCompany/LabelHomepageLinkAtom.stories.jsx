import LabelHomepageLinkAtom from "./LabelHomepageLinkAtom";
import LabelHomepageLink from "./LabelHomepageLinkAtom"

export default {
  title: 'FWK/LabelHomepageLink',
  component: LabelHomepageLinkAtom ,
}

const Template = (args) => <LabelHomepageLinkAtom  {...args}/>;

export const label = Template.bind({});
label.args={
  label:'Home page:'
}
