// Dependencies
import React, {Component} from 'react';

// Components
import ContentHeader from '../../ContentHeader';


class About extends Component {
	render() {
    return (
			<div className="About" >
				<ContentHeader title="Esta es la cabecera de About" description="la descrpción de About" />
				<h1>About Page</h1>
			</div>
		);
	}
}

export default About;