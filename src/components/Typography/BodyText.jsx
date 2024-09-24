import React from 'react';
import PropTypes from 'prop-types';
import styles from './BodyText.module.css'; 

const BodyText = ({ children }) => {
  return <p className={styles.bodyText}>{children}</p>;
};

BodyText.propTypes = {
  children: PropTypes.node.isRequired, // Innehållet i paragrafen
};

export default BodyText;
