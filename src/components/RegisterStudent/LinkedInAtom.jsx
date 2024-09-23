import styles from './RegisterStudent.module.css'; 

const LinkedInAtom = () => {
  return (
    <div>
        <input className={styles.link} type="url" placeholder="https://www.linkedin.com/in/your-profile" id="linkedIn"/>
    </div>
  )
}

export default LinkedInAtom