import React from 'react'
import CompanyPage from "./CompanyPage"

export default {
    title: 'LIA/CompanyPage/CompanyListAtom',
    component: CompanyPage,
}

const Template = (args) => <CompanyPage {...args}/>

export const Default= Template.bind({})
