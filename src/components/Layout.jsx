import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ResponsiveAppBar } from './AppBar/AppBar';
import { Container } from '@mui/material';

export const Layout = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};
