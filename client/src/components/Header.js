import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a href="#" className="brand-logo">
						RunHub
					</a>
					<ul className="right">
						<li>
							<a href="collapsible.html">Login</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
