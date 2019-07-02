import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from '../CRLogo.png'

class NavBar extends Component {
	render() {
		return (
			<nav className="flex-row">
				<ul className="flex-row">
					<li>
						<img src={logo} alt="Logo" />
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/">Blog</Link>
					</li>
					<li>
						<Link to="/form">Contact</Link>
					</li>
				</ul>
			</nav>
		)
	}
}

export default NavBar;