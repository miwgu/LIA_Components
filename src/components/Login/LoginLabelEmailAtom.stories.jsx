import LoginLabelEmailAtom from "./LoginLabelEmailAtom"

export default {
  title: 'FWK/LoginLabelEmailAtom',
  component: LoginLabelEmailAtom,
}

const Template = (args) => <LoginLabelEmailAtom{...args}/>;

export const label = Template.bind({});
label.args={
  label:'Email:'
}
