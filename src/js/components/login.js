import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import '../../css/body.css';

export default class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			loginStatus: 'false'
		}
	}
	render() {
		return (
			<div>
				LOGIN PAGE
				<center>
					<input class="pt-input loginInput" placeholder="username" type="text" />
					<input class="pt-input loginInput" placeholder="password" type="text" />
					<button type="button" class="pt-button pt-intent-success">
					  登录
					  <span class="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
					</button>
				</center>
			</div>
		)
	}
}

Login.propTypes = {
	username: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired
}