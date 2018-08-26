import React, {Component} from 'react';

class Footer extends Component {

  render(){
    return (
      <form role="form">

        <div className="box-body">

          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>

          <div className="form-group">
            <label for="exampleInputFile">File input</label>
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