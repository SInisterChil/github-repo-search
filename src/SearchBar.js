
import React, { useState } from 'react';
import styles from './SearchBar.module.css'; 

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className={styles['search-container']} onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for repositories..."
        value={query}
        onChange={handleInputChange}
        className={styles['search-input']}
      />
      <button type="submit" className={styles['search-button']}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
