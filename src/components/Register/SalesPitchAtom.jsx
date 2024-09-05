import styles from './Register.module.css'; 

const SalesPitchAtom = () => {
  return (
    <div>
      <textarea className={styles.link} placeholder="Write your sales pitch" id="salespitch" rows="5"cols="50"></textarea>
    </div>
  )
}

export default SalesPitchAtom