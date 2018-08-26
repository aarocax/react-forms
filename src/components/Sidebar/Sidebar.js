import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends Component {

  

  render(){

    const { items } = this.props

    return (
      <aside className="main-sidebar">
        <section className="sidebar">

          <div className="user-panel">
            <div className="pull-left image" >
              <img src="img/user2-160x160.jpg" className="img-circle" alt="" />
            </div>
            <div className="pull-left info">
              <p>Alexander Pierce</p>
              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>

          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..." />
              <span className="input-group-btn">
                  <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                  </button>
                </span>
            </div>
          </form>

          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">HEADER</li>
            <li className="active"><Link to={ items[0].url }><i className="fa fa-link"></i><span>{ items[0].title }</span></Link></li>
            <li><Link to={ items[1].url }><i className="fa fa-link"></i> <span>{items[1].title}</span></Link></li>
            <li><Link to={ items[2].url }><i className="fa fa-link"></i> <span>{items[2].title}</span></Link></li>
            <li className="treeview">
              <a href="{items[2].url}"><i className="fa fa-link"></i> <span>{items[2].title}</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="#">Link in level 2</a></li>
                <li><a href="#">Link in level 2</a></li>
              </ul>
            </li>
          </ul>

        </section>
      </aside>
    );
  }
}

export default Sidebar;