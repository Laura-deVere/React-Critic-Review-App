import React from 'react';
import img from '../the-critic.jpg'

const About = () => {
	return (
		<div className="container">
			<div className="flex-row blog-header">
				<div className="flex-row">
					<h2 className="ab-head">The Story</h2>
				</div>	
			</div>	
			<div className="about">	
				<p>Lorem ipsum dolor amet mixtape biodiesel small batch bespoke af, live-edge etsy locavore 8-bit roof party leggings whatever. Heirloom actually pickled, YOLO biodiesel hexagon health goth venmo vinyl kitsch cliche. Hot chicken whatever lomo mustache venmo pork belly DIY retro iceland letterpress. Cray deep v ethical, iceland celiac slow-carb mustache chillwave. Squid chicharrones salvia umami, keytar raw denim woke. Kitsch cred fingerstache, poutine neutra kombucha distillery squid.
				</p>
				<ol>
					<li>retro iceland letterpress</li>
					<li>single-origin coffee</li>
					<li>copper mug art party 90's</li>
				</ol>
				<p>
					Flannel blue bottle single-origin coffee DIY distillery pop-up poutine organic. Live-edge gastropub pork belly, iPhone cardigan fashion axe raclette.
				</p>	
			</div>
			<img className="headshot" src={img}/>
		</div>
	)
}

export default About;