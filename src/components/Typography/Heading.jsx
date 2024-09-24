import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.css';

const Heading = ({ level, children }) => {
  const Tag = `h${level}`; // Dynamisk tagg, t.ex. h1, h2, h3

  return <Tag className={styles[`heading${level}`]}>{children}</Tag>; // Använd CSS module för respektive heading-nivå
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired, // Tillåt endast rubriknivåerna 1-6
  children: PropTypes.node.isRequired, // Textinnehållet inuti rubriken
};

export default Heading;
