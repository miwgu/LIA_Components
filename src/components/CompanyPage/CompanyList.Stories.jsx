import React from 'react'
import CompanyList from "./CompanyList"

export default {
    title: 'LIA/CompanyPage/CompanyList',
    component: CompanyList,
}

function Template (args) {
return <CompanyList {...args}/>
}

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
    ],
};



export const CompanyListComponent= Template.bind({})
CompanyListComponent.args = {
    ...data,
}