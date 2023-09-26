import React, { useState } from 'react';
import styles from './RepoCard.module.css';

const RepoCard = ({ repo }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className={styles['repo-card']}>
      <img src={repo.owner.avatar_url} alt="Avatar" />
      <h2>{repo.name}</h2>
      <p>Stars: {repo.stargazers_count}</p>
      <p>
        {repo.description && (
          showFullDescription ? repo.description : `${repo.description.slice(0, 150)}...`
        )}
        {repo.description && repo.description.length > 150 && (
          <span className={styles['read-more']} onClick={toggleDescription}>
            {showFullDescription ? 'Read Less' : 'Read More'}
          </span>
        )}
      </p>
      <p>Language: {repo.language}</p>
    </div>
  );
};

export default RepoCard;
