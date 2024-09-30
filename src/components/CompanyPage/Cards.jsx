import React from 'react'
import styles from './CompanyPage.module.css'
import CompanyList from './CompanyList'

const CompanyCards = () => {

const cardsData = [
  {
      title: 'Company: Specsavers',
      description: "Student Type: Frontend developer",
      
  },
]

return(

<div className={styles.companyPageContainer}>
<h1>Company Cards</h1>
<CompanyList cardsData={cardsData} />
</div>
)  
}
  export default CompanyCards