import React, {useState} from "react";
import styles from './CompanyPage.module.css'
import { Button} from '@mui/material'



const MoreButtonAtom = () =>{
    

    const [isOpen, setIsOpen] = useState(false);


const toggleSideNav = () => {
  setIsOpen(!isOpen); 
};


    return (
      <div>
        
        <button className={styles.toggleBtn} onClick={toggleSideNav}>
                {isOpen ? 'Close' : 'More'}
            </button>
    

    <div className = {`${styles.MoreButtonAtom} ${isOpen ? styles.open : styles.closed}`}>
    <ul>
      <li> <Button color="inherit">Logout</Button></li>
      <li><Button color="inherit">Search Company</Button></li>
      <li><Button color="inherit">My Page</Button></li>
      <li><Button color="inherit">My Profile </Button></li>
    </ul>
</div>
  
</div>  
  
) 
  }

export default MoreButtonAtom