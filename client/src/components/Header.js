import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<ul className="right">
						<li>
							<a href="/auth/facebook">Login with Facebook</a>
						</li>
						<li>
							<a href="/auth/google">Login with Google</a>
						</li>
					</ul>
				);
			default:
				return (
					<ul className="right">
						<li>
							<Link to="/races/new">New Race</Link>
						</li>
						<li>
							<Link to="/account">Account</Link>
						</li>
						<li>
							<a href="/logout">Logout</a>
						</li>
					</ul>
				);
		}
	}

	render() {
		return (
			<header id="header" className="navbar-fixed">
				<nav>
					<div className="nav-wrapper">
						<Link to="/" className="brand-logo left">
							RunHub
						</Link>
						{this.renderContent()}
					</div>
				</nav>
			</header>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
