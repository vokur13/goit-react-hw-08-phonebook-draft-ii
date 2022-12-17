import { useSelector } from 'react-redux';
import { Box } from '../Box';
import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from '../UserMenu';
import { authSelectors } from '../../redux/auth';
// import { useAuth } from 'hooks';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const { isRefreshing } = useAuth();

  return (
    <Box
      as="header"
      position="fixed"
      width={1}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="#3caea3"
      px={4}
      boxShadow="0px 4px 8px 0px rgba(34, 60, 80, 0.42)"
    >
      <Box
        as="nav"
        display="flex"
        flex={1}
        justifyContent="space-between"
        py={3}
      >
        {/* {!isRefreshing && <Navigation />} */}
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </Box>
  );
};
