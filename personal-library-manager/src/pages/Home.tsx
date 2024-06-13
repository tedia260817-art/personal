import { Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookList from '../components/BookList';
import Window from '../components/Window';
import { LibContainer } from '../styled';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Window>
    <LibContainer>
      <Typography variant="h4" gutterBottom>Personal Library Manager</Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/add')}>
        Add New Book
      </Button>
      <BookList />
    </LibContainer>
    </Window>
  );
};

export default Home;
