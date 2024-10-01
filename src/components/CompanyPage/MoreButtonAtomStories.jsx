import MoreButtonAtom from './MoreButtonAtom'
import {action} from '@storybook/addon-actions'

export default {
    title: 'LIA/CompanyPage/MoreButtonAtom',
    component: MoreButtonAtom,
}

export const Default = {
    args: {
        title: "More",
        onClick: action ('button-clicked'),
     },
};



