import React, { useState } from 'react';
import IosAdd from 'react-ionicons/lib/IosAdd';

const ListItem = ({article, order}) => {
	const [expanded, setExpand] = useState(false);

	const handleClick = () => {
		console.log(expanded)
		if (!expanded) {
			setExpand(true);
		} else {
			setExpand(false);
		}
	}

	return (
		<li className={expanded ? 'flex-row list-item-container expand-transition' : 'flex-row list-item-container collapse-transition'}>
			<div className="flex-row review-container">
				<div className="flex-col">
					<span className="ord">{order+1}</span>
				</div>
				<div>
					<img alt="" src={article.multimedia.src} />
				</div>
				<div className="flex-col">
					<span>BY {article.byline}</span>
					<h2>{article.headline}</h2>
					<p>{article.summary_short}</p>
					<span>{article.publication_date}</span>
					<a href={article.link.url} target="_blank" rel="noopener noreferrer">{article.link.suggested_link_text}</a>
				</div>
			</div>
			<button className={expanded ? 'rotate-transition' : ''} onClick={() => handleClick()} >
				<IosAdd fontSize="50%" color="#fff" />
			</button>
		</li>
	)
}

export default ListItem;