import React from 'react';
import ReactDOM from 'react-dom';
import Menulink from './menulink.js';

export default class MenuBar extends React.Component<{}, {}> {
    render() {
    	const style = {
    		width: "180px",
    		float: "left"
    	}
        return (
        	<div>
	            <ul class="pt-menu pt-elevation-1 .pt-large" style={style}>
				  <li class="pt-menu-header"><h6>Dashboard</h6></li>
				  <li><Menulink to="/" class="pt-menu-item pt-icon-dashboard" onlyActiveOnIndex>Homepage</Menulink></li>
				  <li><Menulink to="/chart" class="pt-menu-item pt-icon-timeline-bar-chart">Chart</Menulink></li>
				  <li class="pt-menu-header"><h6>Table</h6></li>
				  <li><Menulink to="/table" class="pt-menu-item pt-icon-th">Table 1</Menulink></li>
				  <li><Menulink to="/table2" class="pt-menu-item pt-icon-th-list">Table 2</Menulink></li>
				  <li class="pt-menu-header"><h6>Settings</h6></li>
				  <li><Menulink to="/setting" class="pt-menu-item pt-icon-cog">Setting</Menulink></li>
				  <li><Menulink to="/add-a-user" class="pt-menu-item pt-icon-new-person">Add Account</Menulink></li>
				</ul>
			</div>
        );
    }
 
    handleClick(e: React.MouseEvent) {
        console.log("clicked", e.target);
    }
}