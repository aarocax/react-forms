// Dependencies
import React, {Component} from 'react';

// Components
import ContentHeader from '../../ContentHeader';

class Blog extends Component {
	render() {
    return (
			<div className="Blog" >
				<ContentHeader title="Esta es la cabecera de Blog" description="la descrpción de Blog" />
				<h1>Blog Page</h1>
				<h1>Blog Page</h1>
			</div>
		);
	}
}

export default Blog;