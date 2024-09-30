import React from 'react'
import CompanyList from "./CompanyList"

export default {
    title: 'LIA/CompanyPage/CompanyList',
    component: CompanyList,
}
const Template = (args) => <CompanyList {...args}/>
const data = {

    cardsData: [
        {
            title: 'Company 1',
            description: "Student type: Frontend Developer"
        
        },

        {
        title: 'Company 2',
            description: "Student type: Backend Developer",
             
        },

        {
            title: 'Company 3',
                description: "Student type: Frontend Developer",
            }
    ],
};

export const DefaultCompanyList= Template.bind({})
DefaultCompanyList.args = {
    cardsData: data.cardsData,
}
