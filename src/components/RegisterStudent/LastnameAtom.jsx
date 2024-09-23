import styles from './RegisterStudent.module.css'; 

const LastnameAtom = () => {
  return (
    <div>
        <input className={styles.link} type= "text" placeholder="Enter your lastname" id="lastname"/>
    </div>
  )
}

export default LastnameAtom