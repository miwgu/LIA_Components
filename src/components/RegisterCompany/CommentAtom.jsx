import styles from './RegisterCompany.module.css'; 
import React from "react";

const CommentAtom= () => {
  return (
    <div>
      <textarea className={styles.link} placeholder="Write your comment" id="comment" rows="5"cols="50"></textarea>
    </div>
  )
}

export default CommentAtom