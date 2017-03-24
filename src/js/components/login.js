import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { MyToaster } from "../constants/toaster.js";
import '../../css/body.css';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	// login
	onClick(e) {
		e.preventDefault();
		const username = ReactDOM.findDOMNode(this.refs.user).value;
		const password = ReactDOM.findDOMNode(this.refs.passw).value;
		console.log('user: ' + username);
		console.log('password: ' + password);
		if (username && password) {
			if(this.props.loginSuccess) 
				this.props.loginSuccess(username);
			else {
				console.log('虽然你登录成功了，但是没传给父组件');
			}
		} else {
			const key = MyToaster.show({ message: "Toasted!" });
			MyToaster.update(key, { message: "Username and password are required!" });
		}
	}

	render() {
		const style = {
			marginTop: "35vh"
		}

		return (
			<div style={style}>
				<center>
					<h2>LOGIN PAGE</h2>
					<input class="pt-input pt-large loginInput" placeholder="username" ref="user" />
					<input class="pt-input pt-large loginInput" placeholder="password" ref="passw" />
					<button type="button" class="pt-button pt-large pt-intent-success" onClick={this.onClick.bind(this)}>
					  登录
					  <span class="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
					</button>
				</center>
			</div>
		)
	}
}
