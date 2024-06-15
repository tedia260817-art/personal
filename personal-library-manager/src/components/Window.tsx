import React from 'react';
import { Box, Container } from '@mui/material';
import Navbar from './NavBar';
import Footer from './Footer';

interface WindowProps {
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Container component="main" sx={{ flex: 1, mt: 4 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Window;
