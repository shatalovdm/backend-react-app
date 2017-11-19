import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Account from './account/Account';
import NewRace from './races/NewRace';
import '../styles/style.css';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Home} />
						<Route exect path="/account" component={Account} />
						<Route path="/races/new" component={NewRace} />
						<Footer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, { fetchUser })(App);
