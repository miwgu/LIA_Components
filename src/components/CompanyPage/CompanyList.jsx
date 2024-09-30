import React from 'react'
import styles from './CompanyPage.module.css'


const CompanyList = ({ cardsData= [] }) => {
   
    return (
        <div className = {styles.cardContainer}>
    
        {cardsData.map((card, index) => (
             <div key={index} className= {styles.content}>
                     <p>{card.title}</p>
                     <p>{card.description}</p>
                     
                      </div>
                       
  ))}
</div>
    )
}

  export default CompanyList