import { Typography } from '@mui/material';
import React from 'react';
import BookList from '../components/BookList';
import Window from '../components/Window';
import { LibContainer } from '../styled';

const Home: React.FC = () => {
  return (
    <Window>
      <LibContainer>
        <Typography variant="h4" gutterBottom>
          Personal Library Manager
        </Typography>
        <BookList />
      </LibContainer>
    </Window>
  );
};

export default Home;
