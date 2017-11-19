import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<main>
				<div className="row" id="landing">
					<h1>Welcome to RunHub!</h1>
					<h2>All upcoming Marathons, 10K, and 5k!</h2>
					<h3>
						Please log in to rate a race, leave your reviews, and
						post new races.
					</h3>
				</div>
				<div className="row" id="races-landing">
					<h3>Upcoming Races</h3>
				</div>
			</main>
		);
	}
}

export default Home;
