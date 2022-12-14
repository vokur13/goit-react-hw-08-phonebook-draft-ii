import { useSelector } from 'react-redux';
import { Box } from '../Box';
// import { NavItem } from './AppBar.styled';
import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from '../UserMenu';
import { authSelectors } from '../../redux/auth';

// const navItems = [
//   { href: '/', text: 'Home' },
//   // { href: '/', text: 'Home', icon: SomeIcon },
//   { href: 'contacts', text: 'Contacts' },
//   { href: 'register', text: 'Register' },
//   { href: 'login', text: 'Login' },
// ];

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Box
      as="header"
      width={1}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="#3caea3"
      px={4}
      boxShadow="0px 4px 8px 0px rgba(34, 60, 80, 0.42)"
    >
      <Box as="nav" display="flex" flex={1}>
        {/* {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
        <UserMenu /> */}
        <Navigation />
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
        <AuthNav />
        <UserMenu />
      </Box>
    </Box>
  );
};
