import React from 'react'
import LabelSearchCompany from './LabelSearchCompanyAtom'
import SearchCompanyInputAtom from './SearchCompanyInputAtom'
//import MoreButtonAtom from './MoreButtonAtom'
import styles from './CompanyPage.module.css'
import CompanyCards from './Cards'
import CompanyList from './CompanyList'


const CompanyPage = () => {


    return (

<div> 

    <h1 className = {styles.companyPage}> Company Page
    </h1>
    
    {/* <MoreButtonAtom/> */}
    <LabelSearchCompany/>
    <SearchCompanyInputAtom />
    <CompanyCards/>
    <CompanyList/>
   
  </div>      
        

    )
}

export default CompanyPage