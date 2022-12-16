import React from 'react';
import { NavItem } from './Navigation.styled';
import { Box } from '../Box';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

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

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const navItems = [
    { href: '/', text: 'Home' },
    // { href: '/', text: 'Home', icon: SomeIcon },
    isLoggedIn && { href: 'contacts', text: 'Contacts' },
    // isLoggedIn && { href: '/upload', text: 'Upload' },
  ];

  return (
    <Box as="nav" display="flex">
      {navItems.map(({ href, text }) => (
        <NavItem key={href} to={href}>
          {text}
        </NavItem>
      ))}
    </Box>
  );
};
