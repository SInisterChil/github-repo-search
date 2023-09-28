import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RepoCard from './RepoCard';
import styles from './RepoList.module.css'; 

const RepoList = ({ query, sort, page, setPage }) => {
  const [repos, setRepos] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const perPage = 30;
    const apiUrl = `https://api.github.com/search/repositories?q=${query}&sort=${sort}&per_page=${perPage}&page=${page}`;
    axios
      .get(apiUrl, {
        headers: {
          'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
      })
      .then(response => {
        setRepos(response.data.items)
        setTotalPages(Math.ceil(response.data.total_count / perPage))
      })
      .catch(error => console.error(error));
  }, [query, sort, page]);

  return (
    <div className={styles['repo-list-container']}>
      {repos.map(repo => (
        <div key={repo.id} className={styles['repo-list-item']}>
          <RepoCard repo={repo} />
        </div>
      ))}
      <div className={styles['pagination-container']}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <span>Page no {page}</span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default RepoList;
