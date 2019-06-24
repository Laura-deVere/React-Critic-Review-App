import React, { Component } from 'react';
import ListItem from './ListItem';
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listStart: 0,
			listEnd: 4,
			buttonText: 'Older',
			listNum: 0
		}
	}
	renderListItems() {	
		if(this.props.articles) {
			return this.props.articles
				.filter((i, index) => (index >= this.state.listStart && index <= this.state.listEnd))
				.map((article, index) => {
					return <ListItem key={index+article.link.type} article={article} order={index += this.state.listNum} />		
				}
			);
		}
	}

	handleOrderChange() {
		const articles = this.props.articles;
		let index, next;
		let listStart = this.state.listStart;
		let listEnd = this.state.listEnd;
		let listNum = this.state.listNum;

		if (listEnd <= articles.length -5) {			
			index = listStart + 5;
			next = listEnd + 5;
			listNum = listNum + 5;
			this.setState({ 
				listEnd: next,
				listStart: index,
				buttonText: 'Older',
				listNum: listNum
			 });
		} else {
			this.setState({ 
				listEnd: 5,
				listStart: 0,
				buttonText: 'Newest',
				listNum: 0
			 });
		}
	}

	render() {
		return (
			<div className="container">
				<div className="flex-row blog-header">
					<div className="flex-row">
						<button className="flex-row" onClick={() => this.handleOrderChange()}>
							<IosArrowRoundForward fontSize="30px" color="#fff" /> 
							<span>{this.state.buttonText}</span>
						</button>
						<h2>Critics Review</h2>
					</div>
				</div>
				
			<div className="list">
				<ul className="list-item">
					{this.renderListItems()}
				</ul>
			</div>
			</div>
		)
	}
}

export default List;