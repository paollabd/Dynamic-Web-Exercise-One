import React, {useEffect, useState} from 'react'; // import two functions we need from 'react'
import '../components/Article.css';
import articleData from '../components/data';
import TextBlock from '../components/TextBlock';


function Article(props){
	const [article, setArticle] = useState({})
	const routeID = props.match.params.id;

	useEffect(() => {
		for(let i = 0; i < articleData.length; i++) {
			console.log(articleData[i].id);
			if(articleData[i].id === routeID){
				setArticle(articleData[i])
			} else {
				console.log('nope')
			}
		}
	}, [routeID])

	

	return(
		<div className='article'>
			<div className='articleHeader' style={{backgroundImage: `url("${article.image && article.image.url}")`}}>
				<h1>{article.title}</h1>
				<p>{article.publishedDate}</p>
				<h2>{article.blurb}</h2>
			</div>
			<div className="articleText">
				{article.articleText && article.articleText.map((text, i) => (
					<TextBlock key={i} type={text.type} data={text.data} />
				))}
			</div>
		</div>
	)
}

export default Article;