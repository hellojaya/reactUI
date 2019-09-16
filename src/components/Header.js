import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import config from '../config';
import { ChangeLang } from '../actions/system';
import {LoadSearchMovies} from '../actions/movies';

class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchValue: ''
		}
	}
	searchInputChange = (e) => {
		this.setState({
			searchValue: e.target.value
		});		
	};

	searchMovie = (e) => {
		const { history } = this.props;

		if(this.state.searchValue.length > 0) {
			history.push(`/search/${this.state.searchValue}`);
		} else {
			history.push(`/`);
		}
	}

	render(){
		const { searchText } = this.props;
		const languages = config.API_LANGUAGES;

		return (
			<header>
				<div className="container">
					<div className="content">
						<Link to={`/`} className="logo">
							<span>{'IMDB'}</span>
						</Link>
						<div className="header-search-field">
							<input type="text" placeholder={'Search for movies...'} onInput={this.searchInputChange} value={this.state.searchValue}/>
							<button className="search-btn" onClick={this.searchMovie}></button>
						</div>
						<Link to={`/watchlist`}>
							<div className="watchlist-button">
								<ul>
									<li>WatchList</li>
								</ul>
							</div>
						</Link>
					</div>
				</div>
			</header>
		)
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
	{
		LoadSearchMovies
	},
	dispatch
);
const mapStateToProps = (state) => {
	return {
		searchText: state.movies.searchText,
	};
};
export default (withRouter(connect(mapStateToProps, mapDispatchToProps)(Header)));