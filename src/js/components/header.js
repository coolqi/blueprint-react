import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component<{}, {}> {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props.username);
		// console.log(this.props.loginSuccess);
	}

	onClick() {
		this.props.logOut();
	}

    render() {
        return (
			<nav class="pt-navbar .modifier">
			  <div class="pt-navbar-group pt-align-left">
			    <div class="pt-navbar-heading">Hello, {this.props.username}</div>
			    <button class="pt-button pt-minimal pt-icon-user"></button>
			  </div>
			  <div class="pt-navbar-group pt-align-right">
			    <span class="pt-navbar-divider"></span>
			    <button class="pt-button pt-minimal pt-icon-cog" onClick={this.onClick.bind(this)}>Log out</button>
			  </div>
			</nav>
        );
    }
}