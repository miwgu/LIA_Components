import React from 'react'
import CompanyPage from "./CompanyPage"

export default {
    title: 'FWK/CompanyPage',
    component: CompanyPage,
}

const Template = (args) => <CompanyPage {...args}/>

export const Default= Template.bind({})
