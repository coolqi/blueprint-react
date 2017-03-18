import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class MenuBar extends React.Component<{}, {}> {
    render() {
    	const style = {
    		width: "180px",
    		float: "left"
    	}
        return (
            <ul class="pt-menu pt-elevation-1 .pt-large" style={style}>
			  <li class="pt-menu-header"><h6>Layouts</h6></li>
			  <li><button type="button" class="pt-menu-item pt-icon-layout-auto">Homepage</button></li>
			  <li><button type="button" class="pt-menu-item pt-icon-layout-circle">Circle</button></li>
			  <li><button type="button" class="pt-menu-item pt-icon-layout-grid">Grid</button></li>
			  <li class="pt-menu-header"><h6>Views</h6></li>
			  <li><button type="button" class="pt-menu-item pt-icon-history">History</button></li>
			  <li><button type="button" class="pt-menu-item pt-icon-star">Favorites</button></li>
			  <li><button type="button" class="pt-menu-item pt-icon-envelope">Messages</button></li>
			  <li class="pt-menu-header"><h6>Tables</h6></li>
			  <li><button type="button" class="pt-menu-item pt-icon-help">table 1</button></li>
			  <li><Link type="button" class="pt-menu-item pt-icon-chat">table 2</Link></li>
			</ul>
        );
    }
 
    handleClick(e: React.MouseEvent) {
        console.log("clicked", e.target);
    }
}