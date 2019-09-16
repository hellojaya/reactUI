import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from './components/Header';

import routes from './routes';

import {ChangeLang} from './actions/system';

import { storage } from './services';

import './assets/styles/normalize.css';
import './assets/styles/main.css';


class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<Header/>
				<div className="container">
					{routes}
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
	{
		ChangeLang
	},
	dispatch
);
export default (withRouter(connect(null, mapDispatchToProps)(App)));