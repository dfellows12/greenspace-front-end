import React from "react";
import { Input, Menu } from 'semantic-ui-react'
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  return (
    <div className="navbar">
      <Menu className>
        <Menu.Item header>GreenSpace</Menu.Item>
        <Link to="/plants"><Menu.Item position='right'
          name='Add Plant'
        /></Link>
        <Menu.Item small position='right'
          name='Create Plant'

          
        />
        <Menu.Item small position='right'
          name='Log out'
          
        />
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

const NavBarWithRouter = withRouter(Navbar);

export default NavBarWithRouter;
