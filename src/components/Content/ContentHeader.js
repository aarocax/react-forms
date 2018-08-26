import React, {Component} from 'react';

class ContentHeader extends Component {

  render(){
    const { title, description } = this.props;
    return (
      <section className="content-header">
        <h1> { title } <small>{ description }</small></h1>
        
        <ol className="breadcrumb">
          <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
          <li className="active">Here</li>
        </ol>
      </section>
    );
  }
}

export default ContentHeader;