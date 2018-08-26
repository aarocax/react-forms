import React, {Component} from 'react';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      exampleInputEmail1: '',
      exampleInputPassword1: ''
      
    };
    this.handleExampleInputEmail1 = this.handleExampleInputEmail1.bind(this);
    this.handleExampleInputPassword1 = this.handleExampleInputPassword1.bind(this);
  }

  handleExampleInputEmail1(event) {
    this.setState({
      exampleInputEmail1: event.target.value,
    });
  }

  handleExampleInputPassword1(event) {
    this.setState({
      exampleInputPassword1: event.target.value,
    }); 
  }

  render(){
    return (
      <form>

        <div className="box-body">

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" value={this.state.exampleInputEmail1} onChange={this.handleExampleInputEmail1} placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.exampleInputPassword1} onChange={this.handleExampleInputPassword1} placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputFile">File input</label>
            <input type="file" id="exampleInputFile" />
            <p className="help-block">Example block-level help text here.</p>
          </div>

          <div className="checkbox">
            <label>
              <input type="checkbox" /> Check me out
            </label>
          </div>

        </div>

        <div className="box-footer">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

export default Footer;