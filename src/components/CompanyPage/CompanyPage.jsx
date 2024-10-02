import React from 'react'
import LabelSearchCompany from './LabelSearchCompanyAtom'
import SearchCompanyInputAtom from './SearchCompanyInputAtom'
//import MoreButtonAtom from './MoreButtonAtom'
import styles from './CompanyPage.module.css'
import CompanyList from './CompanyList'
import SearchInput from './SearchInput'
import Cards from './Cards'



const CompanyPage = () => {


    return (

<div> 

    <h1 className = {styles.companyPage}> Company List
    </h1>
    
    {/* <MoreButtonAtom/> */}
    {/* <LabelSearchCompany/>
    <SearchCompanyInputAtom /> */}
    <div className = {styles.companyPageContainer}>
    <SearchInput/>
    </div>
    <Cards></Cards>
  </div>      
        

    )
}

export default CompanyPage