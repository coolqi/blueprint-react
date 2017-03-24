import React from 'react';
import ReactDOM from 'react-dom';

export default class Homepage extends React.Component {
	render () {
		return (
			<div style={this.props.style}>
				Welcome back~
			</div>
		)
	}
}