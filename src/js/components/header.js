import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component<{}, {}> {
    render() {
        return (
			<nav class="pt-navbar .modifier">
			  <div class="pt-navbar-group pt-align-left">
			    <div class="pt-navbar-heading">IKNOW.AI</div>
			  </div>
			  <div class="pt-navbar-group pt-align-right">
			    <span class="pt-navbar-divider"></span>
			    <button class="pt-button pt-minimal pt-icon-user"></button>
			    <button class="pt-button pt-minimal pt-icon-notifications"></button>
			    <button class="pt-button pt-minimal pt-icon-cog"></button>
			  </div>
			</nav>
        );
    }
}