import React from 'react'
import LabelSearchCompany from './LabelSearchCompanyAtom'
import SearchCompanyInputAtom from './SearchCompanyInputAtom'
import MoreButtonAtom from './MoreButtonAtom'
import styles from './CompanyPage.module.css'
import CompanyCards from './Cards'


const CompanyPage = () => {


    return (

<div> 

    <h1 className = {styles.companyPage}> Company Page
    </h1>
    
    <MoreButtonAtom/>
    <LabelSearchCompany/>
    <SearchCompanyInputAtom />
    <CompanyCards/>
   
  </div>      
        

    )
}

export default CompanyPage