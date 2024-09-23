import EmailAtom from "./EmailAtom"
import { action } from '@storybook/addon-actions';

export default {
    title: 'LIA/Login/EmailAtom',
    component: EmailAtom,
}

export const Default = {
    args: {
        onEmailChange: action('email-changed'), // Log the 'email-changed' event
    },
};

export const WithinInitialValue ={
    args:{
        onEmailChange: action('email-changed'),
        initialValue: 'User1@example.com',
    }
}


function Template (args){
    return <EmailAtom{...args}/>
}

const data = {
    label:"Email",
}

export const EmailAtomComponent = Template.bind({})
    EmailAtomComponent.args = {
        ...data,
    }