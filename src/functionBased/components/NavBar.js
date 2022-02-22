import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
    {
      id: 3,
      path: '/*',
      text: 'Error',
    },
  ];
  return (
    <nav className="navBar">
      <ul className="nav-list">
        {links.map((link) => (
          <li className="nav-item" key={link.id}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
