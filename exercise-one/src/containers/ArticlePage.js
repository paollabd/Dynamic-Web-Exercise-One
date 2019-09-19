import React from 'react';
import '../App.css';
import articleData from '../components/data';

function ArticleCard({
  articleData = {}
}) {
  return (
    <div className="articleDiv">
      <header className="articleHead">
        <img className="image" src={articleData.image.url} alt={articleData.image.alt}></img>
        <h2 className="title">{articleData.title}</h2>
        <p className="date">{articleData.publishedDate}</p>
        <p className="blurb">{articleData.blurb}</p>
        <p className="more"><a href={`/article/${articleData.id}`}>Read More</a></p>
      </header>
    </div>
  );
}

export default function Article(props){
  console.log("hi");
  return(
    <div>
      <div className="article">
        <h2>Articles</h2>
      </div>
      {articleData.map((article, i) => 
        <ArticleCard key={i} articleData={article} />
      )}
    </div>
  );
}
