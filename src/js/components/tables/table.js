import React from 'react';
import ReactDOM from 'react-dom';

export default class Table extends React.Component {
	render() {
		return (
			<div>
				<table class="pt-table .modifier">
				  <thead>
				    <th>Project</th>
				    <th>Description</th>
				    <th>Technologies</th>
				  </thead>
				  <tbody>
				    <tr>
				      <td>Blueprint</td>
				      <td>CSS framework and UI toolkit</td>
				      <td>Sass, TypeScript, React</td>
				    </tr>
				    <tr>
				      <td>TSLint</td>
				      <td>Static analysis linter for TypeScript</td>
				      <td>TypeScript</td>
				    </tr>
				    <tr>
				      <td>Plottable</td>
				      <td>Composable charting library built on top of D3</td>
				      <td>SVG, TypeScript, D3</td>
				    </tr>
				  </tbody>
				</table>
				<table class="pt-table pt-interactive .modifier">
				  <thead>
				    <th>Project</th>
				    <th>Description</th>
				    <th>Technologies</th>
				  </thead>
				  <tbody>
				    <tr>
				      <td>Blueprint</td>
				      <td>CSS framework and UI toolkit</td>
				      <td>Sass, TypeScript, React</td>
				    </tr>
				    <tr>
				      <td>TSLint</td>
				      <td>Static analysis linter for TypeScript</td>
				      <td>TypeScript</td>
				    </tr>
				    <tr>
				      <td>Plottable</td>
				      <td>Composable charting library built on top of D3</td>
				      <td>SVG, TypeScript, D3</td>
				    </tr>
				  </tbody>
				</table>
			</div>
		)
	}
}