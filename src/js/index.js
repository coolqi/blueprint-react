import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login.js';
import Header from './components/header.js';
import MenuBar from './components/menubar.js';
import Body from './components/body.js';
export default class Index extends React.Component {
	render() {
		const style = {
			marginTop: "20px",
		}
		return (
			
			 <div>
				<Header/>
				<div style={style}>
					<MenuBar/>
					<Body/>
				</div>
			</div>  
		)
	}
}

ReactDOM.render(<Index/> , document.getElementById('content'));