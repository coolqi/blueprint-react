import React from 'react';
import ReactDOM from 'react-dom';
import { Radio, RadioGroup } from '@blueprintjs/core';

export default class Setting extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			father: '',
			mother: '',
			age: '',
			home: '',
			gender: ''
		}
	}

	render() {
		const style={
			width: "200px"
		}
		return (
			<div>
				<label class="pt-label pt-inline">
				  <span>name:</span> 
				  <input class="pt-input" style={style} type="text" placeholder="Text input" dir="auto" />
				</label>
				<label class="pt-label pt-inline">
				  age: 
				  <input class="pt-input" style={style} type="text" placeholder="Text input" dir="auto" />
				</label>
				<label class="pt-control pt-radio .modifier">
				  <input type="radio" name="docs-radio-regular" />
				  <span class="pt-control-indicator"></span>
				  Male
				</label>
				<label class="pt-control pt-radio .modifier">
				  <input type="radio" name="docs-radio-regular" />
				  <span class="pt-control-indicator"></span>
				  Female
				</label>
			</div>

		)
	}
}