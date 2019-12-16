import React from "react";
import { connect } from 'react-redux'
import { Input, Menu } from 'semantic-ui-react'
import { Link, NavLink, withRouter } from "react-router-dom";
import { logUserOut } from "../redux/actions"

const Navbar = props => {
  return (
    <div className="navbar">
      <Menu className>
        <Menu.Item header>GreenSpace</Menu.Item>
        <Link to="/plants"><Menu.Item position='right'
          name='Add Plant'
        /></Link>
        <Link to="/plants/create"><Menu.Item small position='right'
          name='Create Plant'
        /></Link>
        <Link to="/"><Menu.Item small position='right'
          name='Log out'
          onClick={props.logUserOut}
          />
        </Link>
          <Menu.Item small position='right'>
          <Input
            action={{ type: 'submit', content: 'Go' }}
            placeholder='Search plants...'
          />
          </Menu.Item>
      </Menu>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  logUserOut: (info) => {dispatch(logUserOut(info))}
});

const NavBarWithRouter = withRouter(Navbar);

export default connect(null, mapDispatchToProps)(NavBarWithRouter)
