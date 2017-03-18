import React from 'react';
import ReactDOM from 'react-dom';
import Table from './tables/table.js';

export default class Body extends React.Component {
	constructor() {
		super();
	}
	render() {
		const style = {
			marginLeft: "200px",
			width: "calc(100vw - 200px)"
		}
		return (
			<div style={style}>
				<Table />
			</div>
		);
	}
}