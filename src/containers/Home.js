import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import MoviesFilter from '../components/MoviesFilter';

class Home extends Component {

	static path = '/:page(\\d+)?';

	render(){
		const { t } = this.props;

		return (
			<div className="movies">
					<title>{'IMDB'}</title>
				<MoviesFilter/>
				<MoviesList/>
			</div>
		)
	}
}
export default (Home);