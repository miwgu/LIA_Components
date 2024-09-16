import PasswordAtom from "./PasswordAtom"
import { action } from '@storybook/addon-actions';

export default {
    title: 'LIA/Login/PasswordAtom',
    component: PasswordAtom,
}

export const Default = {
    args: {
        onPasswordChange: action('password-changed'), // Log the 'email-changed' event
    },
};

export const WirhinInitialValue ={
    args:{
        onPasswordChange: action('password-changed'),
        initialValue: '123&a',
    }
}


function Template (args){
    return <PasswordAtom{...args}/>
}

const data = {
    label:"Password",
}

export const PasswordAtomComponent = Template.bind({})
    PasswordAtomComponent.args = {
        ...data,
    }