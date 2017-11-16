import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import Header from './Header';

const Account = () => <div>Account</div>;
const NewRace = () => <div>New Race</div>;
const Home = () => <div>Home</div>;

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
						<Route path="/account" component={Account} />
						<Route path="/races/new" component={NewRace} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, { fetchUser })(App);
