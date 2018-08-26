import React, {Component} from 'react';

// Components
import ContentHeader from './ContentHeader';

class Content extends Component {

  constructor (props) {
    super(props);
    
    this.state = {
      body: props.body,
      page: props.page,
    };
  }


  componentDidMount() {
    console.log('GrandChild did mount.');
  }

  render(){
    console.log(this.props);
    
    return (
      <div className="content-wrapper">
        <section className="content container-fluid">
          {this.state.body}
        </section>
      </div>
    );
  }
}

export default Content;