import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Personal Library Manager
          </Typography>
          <Button
            color="inherit"
            variant="outlined"
            component={Link}
            to="/"
            startIcon={<HomeIcon />}
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            component={Link}
            to="/add"
            startIcon={<AddIcon />}
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          >
            Add Book
          </Button>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          <ListItem
            button
            component={Link}
            to="/"
            onClick={toggleDrawer(false)}
          >
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem
            button
            component={Link}
            to="/add"
            onClick={toggleDrawer(false)}
          >
            <ListItemText primary="Add Book" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
