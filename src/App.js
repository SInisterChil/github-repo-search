import React, { useState } from 'react';
import SearchBar from './SearchBar';
import RepoList from './RepoList';
import styles from './App.module.css';

function App() {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('stars');
  const [page, setPage] = useState(1);

  const handleSearch = (query) => {
    setQuery(query);
    setPage(1);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.h1}>GitHub Repository Search</h1>
      <SearchBar onSearch={handleSearch} />
      <div className={styles['select-container']}>
        <label>Sort By:</label>
        <select value={sort} onChange={handleSort}>
          <option value="stars">Stars</option>
          <option value="watchers">Watchers</option>
          <option value="score">Score</option>
          <option value="name">Name</option>
          <option value="created">Created Date</option>
          <option value="updated">Updated Date</option>
        </select>
      </div>
      <RepoList query={query} sort={sort} page={page} setPage={setPage} className={styles['repo-list-container']}/>
    </div>
  );
}

export default App;
