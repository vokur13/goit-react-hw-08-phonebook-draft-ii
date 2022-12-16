import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar';
import { Box } from '../Box';

export const Layout = () => {
  return (
    <Box display="grid" gridTemplateRows="75px 1fr">
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
