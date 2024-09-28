import LabelHomepageLinkAtom from "./LabelHomepageLinkAtom";
import LabelHomepageLink from "./LabelHomepageLinkAtom"
import React from "react";

export default {
  title: 'LIA/RegisterCompany/LabelHomepageLink',
  component: LabelHomepageLinkAtom ,
}

const Template = (args) => <LabelHomepageLinkAtom  {...args}/>;

export const label = Template.bind({});
label.args={
  label:'Home page:'
}
