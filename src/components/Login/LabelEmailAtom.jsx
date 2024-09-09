import styles from './Login.module.css';


const LabelEmailAtom = ({ label="Email:" }) => {
  return (
    <div className={styles.labelLink}>
      <label htmlFor= "email">{label}</label>
    </div>
  );
};

export default LabelEmailAtom;