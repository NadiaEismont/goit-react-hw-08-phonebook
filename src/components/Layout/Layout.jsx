import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';

import { Layout as Box } from './Layout.styled';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Box>
          <Outlet />
        </Box>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

// export const Layout = ({ children }) => {
//   return <Box>{children}</Box>;
// };
