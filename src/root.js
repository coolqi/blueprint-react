import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Index from './js/index';
import Homepage from './js/components/homepage.js';
import Table from './js/components/tables/table.js';
import Table2 from './js/components/tables/table2.js';
// import MenuBar from './js/components/menubar.js';
// import reducer from './js/reducers';
// const store = createStore(reducer)

export default class Root extends React.Component {
	render() {
		return (
		    <Router history = {hashHistory}>
		        <Route path="/" component={Index}>
			        <IndexRoute component={Homepage}/>
			        	<Route path="/chart" component={Homepage}/>
			        	<Route path="table" component={Table}/>
			        	<Route path="table2" component={Table2}/>
				      	<Route path="setting" component={Table}/>
				      	<Route path="add-a-user" component={Homepage}/>
				</Route>
		    </Router>
		)
	}
}

render(<Root />, document.getElementById('content'));