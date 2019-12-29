import React from "react";
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { Link, withRouter } from "react-router-dom";
import { logUserOut } from "../redux/actions/user_actions"

const Navbar = props => {
  return (
    <div className="navbar">
      <Menu className>
        <Link to='/'><Menu.Item header>Your GreenSpace</Menu.Item></Link>
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
      </Menu>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  logUserOut: (info) => {dispatch(logUserOut(info))}
});

const NavBarWithRouter = withRouter(Navbar);

export default connect(null, mapDispatchToProps)(NavBarWithRouter)
