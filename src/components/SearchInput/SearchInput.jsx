import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchInput.module.css';

const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.searchInput}
      placeholder={placeholder}
    />
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,       // Sökfältets nuvarande värde
  onChange: PropTypes.func.isRequired,      // Funktion för att hantera input-ändringar
  placeholder: PropTypes.string,            // Placeholder text
};

SearchInput.defaultProps = {
  placeholder: 'Search...',                 // Standard placeholder
};

export default SearchInput;
