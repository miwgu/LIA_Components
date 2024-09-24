import React from 'react';
import PropTypes from 'prop-types';
import styles from './Subtitle.module.css';

const Subtitle = ({ children }) => {
  return <h3 className={styles.subtitle}>{children}</h3>;
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired, // Innehållet i undertiteln
};

export default Subtitle;
