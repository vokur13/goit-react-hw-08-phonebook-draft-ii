import React from 'react';
import { NavItem } from './AuthNav.styled';
import { Box } from '../Box';

const navItems = [
  // // { href: '/', text: 'Home', icon: SomeIcon },
  { href: 'register', text: 'Register' },
  { href: 'login', text: 'Login' },
];

export const AuthNav = () => {
  return (
    <Box as="div" display="flex">
      {navItems.map(({ href, text }) => (
        <NavItem to={href} key={href}>
          {text}
        </NavItem>
      ))}
    </Box>
  );
};
