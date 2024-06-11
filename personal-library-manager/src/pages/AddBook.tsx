import React from 'react';
import { Container, Typography } from '@mui/material';
import { addBook } from '../services/api';
import BookForm from '../components/BookForm';
import { useNavigate } from 'react-router-dom';
import { Book } from '../types/Book';

const AddBook: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: Omit<Book, 'id'>) => {
    await addBook(values);
    navigate('/');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Add New Book</Typography>
      <BookForm initialValues={{ title: '', author: '', genre: '', description: '' }} onSubmit={handleSubmit} />
    </Container>
  );
};

export default AddBook;
