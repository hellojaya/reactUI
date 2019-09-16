import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Helmet from 'react-helmet';

import config from '../config';

import { LoadPerson } from '../actions/person';
import { LoadGenres } from '../actions/genres';

import PersonCreditList from '../components/PersonCreditsList';
import PersonImagesList from '../components/PersonImagesList';

class Movie extends Component {

	static path = '/person/:person_id(\\d+)';

	componentDidMount(){
		const { match, LoadPerson, LoadGenres } = this.props;
		LoadGenres();
		LoadPerson(match.params.person_id);
	}

	componentWillReceiveProps(nextProps) {
		const { match, LoadPerson } = this.props;
		if(match.params.person_id !== nextProps.match.params.person_id) {
			LoadPerson(nextProps.match.params.person_id);
		}
	}

	imageLoaded = (e) => {
		e.target.classList.add('img-loaded');
	};

	render(){

		const { person, isFetched, t } = this.props;

		if(!isFetched)
			return (
				<div className="loading-box"></div>
			);

		return (
			<div>
				<Helmet>
					<title>{person.name} | {'IMDB'}</title>
				</Helmet>
				<div className="person">
					<div className="person-inner">
						<div className="person-image">
							<img src={`${config.API_IMAGE.medium}/${person.profile_path}`} onLoad={this.imageLoaded}/>
						</div>
						<div className="person-details">
							<div className="person-name">
								{person.name}
							</div>
							{person.birthday && (
								<div className="person-item">
									<span>{'Birthday'}:</span>
									{person.birthday}
								</div>
							)}
							{person.place_of_birth && (
								<div className="person-item">
									<span>{'Place of birth'}:</span>
									{person.place_of_birth}
								</div>
							)}
							{person.biography && (
								<div className="person-biography">
									<span>{'Biography'}:</span>
									{person.biography}
								</div>
							)}
							<PersonImagesList/>
						</div>
					</div>
				</div>
				<PersonCreditList/>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
	{
		LoadPerson,
		LoadGenres
	},
	dispatch
);

const mapStateToProps = (state) => {
	return {
		person: state.person.data,
		isFetched: state.person.isFetched
	};
};

export default (connect(mapStateToProps, mapDispatchToProps)(Movie));