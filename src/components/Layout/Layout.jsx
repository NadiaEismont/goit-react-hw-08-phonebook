import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

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
      <NotificationContainer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
