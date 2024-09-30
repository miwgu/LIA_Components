import React from 'react'
import LabelSearchCompany from './LabelSearchCompanyAtom'
import SearchCompanyInputAtom from './SearchCompanyInputAtom'
import CompanyListAtom from './CompanyListAtom'
import MoreButtonAtom from './MoreButtonAtom'
import DivLogoAtom from './DivLogoAtom'
import styles from './CompanyPage.module.css'

const CompanyPage = () => {

    return (

<div>
        <MoreButtonAtom/>
        {/* <DivLogoAtom/> */}
        <h2 className = {styles.companyList}> Company List</h2>
        <LabelSearchCompany/>
        <SearchCompanyInputAtom />
        <CompanyListAtom/>
  </div>      
        

    )
}

export default CompanyPage