import styles from "./RegisterCompany.module.css"
import React from "react";


const HomepageLinkAtom= () => {

  return (
    <div>
        <input className={styles.link} type="url" placeholder="Link your home page here" id="HomepageLinkAtom"/>
    </div>
  )
}

export default HomepageLinkAtom
