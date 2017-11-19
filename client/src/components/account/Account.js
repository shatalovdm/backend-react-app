import React, { Component } from 'react';
// import AccountForm from './AccountForm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Account extends Component {
	render() {
		const { account } = this.props;
		return (
			<main>
				<div className="row">
					<div className="col s6">
						<div
							id="account"
							className="z-depth-1 block block-shadow"
						>
							<h3>Account Info</h3>
							<div className="account-content">
								<img
									src={account.avatar}
									alt="avatar"
									className="circle responsive-img"
								/>
								<ul>
									<li>Name: {account.name}</li>
									<li>Email: {account.email}</li>
									<li>
										Signup method:{' '}
										{account.googleId
											? 'Google'
											: 'Facebook'}
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col s6 right-align">
						<div className="block">
							<Link
								to="/races/new"
								class="waves-effect waves-light btn-large"
							>
								Create New Race
							</Link>
						</div>
					</div>
				</div>
			</main>
		);
	}
}
function mapStateToProps(state) {
	console.log(state);
	return { account: state.auth };
}

export default connect(mapStateToProps)(Account);
