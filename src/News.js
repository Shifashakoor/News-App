import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'

function News() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('https://newsdata.io/api/1/news?apikey=pub_47286399fc8b4330aff0fdef71518eea&country=pk&language=en')
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data.results)) {
          setArticles(data.results)
        } else {
          setArticles([])
        }
      })
      .catch(error => {
        console.error("Fetch Error: ", error)
        setArticles([])
      })
  }, [])
return (
    <div className="container my-4">
      <h2 className="text-center mb-4">📰 Pakistan Top News</h2>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <Newsitem
            key={index}
            title={article.title}
            description={article.description}
            urlToImage={article.image_url}
            url={article.link}
          />
        ))
      ) : (
        <p>Loading news or no news found.</p>
      )}
    </div>
  )
}

export default News;
