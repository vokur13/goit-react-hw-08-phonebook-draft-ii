import React from 'react';
// import { NavLink } from 'react-router-dom';
import { NavItem } from './Navigation.styled';
import { Box } from '../Box';

const navItems = [
  { href: '/', text: 'Home' },
  // { href: '/', text: 'Home', icon: SomeIcon },
  { href: 'contacts', text: 'Contacts' },
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

export const Navigation = () => (
  <Box as="nav">
    {navItems.map(({ href, text }) => (
      <NavItem to={href} key={href}>
        {text}
      </NavItem>
    ))}
    {/* <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Home
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Contacts
    </NavLink> */}
  </Box>
);
