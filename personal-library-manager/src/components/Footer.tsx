import React from 'react';
import { Typography } from '@mui/material';
import { FooterBox } from '../styled';
import StatusBar from './StatusBar';

const Footer: React.FC = () => {
  return (
    <>
      <FooterBox component="footer">
        <Typography variant="body1">
          &copy; 2024 My Library. All rights reserved.
        </Typography>
      </FooterBox>
      <StatusBar />
    </>
  );
};

export default Footer;
