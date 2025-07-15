import React from 'react';
import './News.css';  // yahan updated CSS import karna

function Newsitem({ title, description, urlToImage, url }) {
  return (
    <div className="news-card">
      <img src={urlToImage} className="card-img-top" alt="News" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-dark" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  );
}

export default Newsitem;
