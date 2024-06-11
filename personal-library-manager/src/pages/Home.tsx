// src/pages/Home.tsx
import React from 'react';
import BookList from '../components/BookList';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Personal Library Manager</Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/add')}>
        Add New Book
      </Button>
      <BookList />
    </Container>
  );
};

export default Home;
