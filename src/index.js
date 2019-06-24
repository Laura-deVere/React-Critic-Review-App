import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';

import NavBar from './Components/NavBar';
import About from './Components/About';
import Contact from './Components/Contact';
import List from './Components/List';

const API_KEY = `${process.env.REACT_APP_MOVIE_API}`;
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=${API_KEY}`;

const loader = document.getElementById('loader');
const showLoader = () => loader.classList.remove('loader--hide');
const hideLoader = () => loader.classList.add('loader--hide');

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [] }
	}

	componentDidMount() {
		axios.get(URL)
			.then(response => {
				const data = response.data.results;
				this.setState({ data });
			})
			.catch(error => {
				console.log(error);
			});
		this.props.hideLoader();	

	}

	render() {
		return (
			<Router>
			    <div>
			    	<NavBar />
			        <Route exact path="/" render={(props) => <List {...props} articles={this.state.data} />} />
			        <Route path="/about" component={About} />
			        <Route path="/contact" component={Contact} />
			    </div>
		  	</Router>
		)
	}
}

// setTimeout(() => 
	ReactDOM.render(
		<App 
			hideLoader={hideLoader}
			showLoader={showLoader}
		/>, document.getElementById('root')
	)
	// ,
	// 5000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
