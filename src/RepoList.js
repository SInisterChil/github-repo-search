import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RepoCard from './RepoCard';
import styles from './RepoList.module.css'; 

const RepoList = ({ query, sort }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const apiUrl = `https://api.github.com/search/repositories?q=${query}&sort=${sort}`;
    axios
      .get(apiUrl, {
        headers: {
          'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
      })
      .then(response => setRepos(response.data.items))
      .catch(error => console.error(error));
  }, [query, sort]);

  return (
    <div className={styles['repo-list-container']}>
      {repos.map(repo => (
        <div key={repo.id} className={styles['repo-list-item']}>
          <RepoCard repo={repo} />
        </div>
      ))}
    </div>
  );
};

export default RepoList;
