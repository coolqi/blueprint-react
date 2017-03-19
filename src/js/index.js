import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login.js';
import Header from './components/header.js';
import MenuBar from './components/menubar.js';

export default class Index extends React.Component {
	constructor(){
		super();
		this.state = {
			username: '',
			token: '',
			loginStatus: false
		}
	}

	// componentDidMount() {
	// 	console.log('index: ' + this.state.username);
	// }

	loginSuccess(name) {
		this.setState({
			username: name,
			loginStatus: true
		})
	}

	logOut() {
		this.setState({
			loginStatus: false
		})
	}

	render() {
		const style = {
			marginTop: "20px",
		}
		const bodyStyle = {
			marginLeft: "190px",
			width: "calc(100vw - 205px)",
		}

		if(!this.state.loginStatus){
			return <Login loginSuccess={this.loginSuccess.bind(this)}/>
		} 

		return (
			<div>
				<Header username={this.state.username} logOut={this.logOut.bind(this)}/>
				<div style={style}>
					<MenuBar/>
					<div style={bodyStyle}>
						{this.props.children}
					</div>
				</div>
			</div>  
		)
	}
}
