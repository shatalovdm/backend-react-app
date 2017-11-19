import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class NewRace extends Component {
	renderField({ input, label, type, meta: { touched, error, warning } }) {
		<div>
			<label>{label}</label>
			<div>
				<input {...input} placeholder={label} type={type} />
				{touched &&
					((error && <span>{error}</span>) ||
						(warning && <span>{warning}</span>))}
			</div>
		</div>;
	}
	render() {
		const { handleSubmit, pristine, reset, submitting } = props;
		return (
			<main>
				<div className="row">jnjlnl</div>
			</main>
		);
	}
}

export default reduxForm({
	form: 'NewRace'
})(NewRace);
