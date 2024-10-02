import React from 'react'
import styles from './CompanyPage.module.css'

const Cards = ({title, description}) => {

return(

<div className={styles.content}>
<h1>{title}</h1>
<p>{description} </p>
</div>
)  
}
export default Cards