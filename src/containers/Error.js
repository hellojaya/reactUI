import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Error extends Component {
	render(){

		const { t } = this.props;

		return (
			<div>
				<Helmet>
					<title>{'Error'}</title>
				</Helmet>
				<div>Error</div>
			</div>
		)
	}
}

export default (Error);