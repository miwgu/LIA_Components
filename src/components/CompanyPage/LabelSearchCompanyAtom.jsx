import React from 'react'
import styles from './CompanyPage.module.css'

const LabelSearchCompanyAtom = ({ label="" }) => {
   
    return (
      <div className = {styles.labelSearch}>
        <label>{label}</label>
      </div>
    );
  };
  
  export default LabelSearchCompanyAtom

  