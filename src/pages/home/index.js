import React, { Component } from 'react';
import Header from '../../components/header';
import './index.less';

class Home extends Component {
	render() {
		return (
			<div className="p-home">
				<Header param1="abc" />
				<h1>Home page</h1>
			</div>
		)
	}
}

export default Home;