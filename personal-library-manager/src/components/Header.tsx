import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Library
        </Typography>
        <Box>
          <Button variant="outlined" color="secondary" component={Link} to="/">Home</Button>
          <Button variant="outlined" color="secondary" component={Link} to="/add">Add Book</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
