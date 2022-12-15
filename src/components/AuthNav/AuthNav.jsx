import React from 'react';
// import { NavLink } from 'react-router-dom';
import { NavItem } from './AuthNav.styled';
import { Box } from '../Box';

const navItems = [
  // { href: '/', text: 'Home' },
  // // { href: '/', text: 'Home', icon: SomeIcon },
  // { href: 'contacts', text: 'Contacts' },
  { href: 'register', text: 'Register' },
  { href: 'login', text: 'Login' },
];

// const styles = {
//   link: {
//     display: 'inline-block',
//     textDecoration: 'none',
//     padding: 12,
//     fontWeight: 700,
//     color: '#2A363B',
//   },
//   activeLink: {
//     color: '#E84A5F',
//   },
// };

export const AuthNav = () => {
  return (
    <Box as="div">
      {navItems.map(({ href, text }) => (
        <NavItem to={href} key={href}>
          {text}
        </NavItem>
      ))}
      {/* <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Login
      </NavLink> */}
    </Box>
  );
};
