import React from "react";
import styles from './CompanyPage.module.css'


const MoreButtonAtom = ({onClick,title="More"}) =>{
    

    return(       
        <button className={styles.MoreButton} onClick={onClick}> {title}</button>
    )
}

export default MoreButtonAtom