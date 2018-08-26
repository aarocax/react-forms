// Dependencies
import React, {Component} from 'react';

// Components
import ContentHeader from '../../ContentHeader';
import Form1 from '../../../Forms/Form1';


class Home extends Component {
	render() {
    return (
    	<div>
	    	<ContentHeader title="el título de la home" description="la descrpción de la home" />
				<div className="row" >
					<div className="col-md-12">
						<div className="box box-primary">
							<div className="box-header with-border">
              	<h3 class="box-title">{ this.props.title }</h3>
            	</div>
							<h1></h1>
							<Form1 />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;