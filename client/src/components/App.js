import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const Account = () => <div>Account</div>;
const NewRace = () => <div>New Race</div>;
const Home = () => <div>Home</div>;

const App = props => {
	return (
		<div>
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
};

export default App;
