import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { getBook, updateBook } from '../services/api';
import BookForm from '../components/BookForm';
import { Container, Typography } from '@mui/material';
import { Book } from '../types/Book';

const fetcher = (id: string) => getBook(parseInt(id)).then(res => res.data);

const EditBook: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, error } = useSWR(id, fetcher);

  if (error) return <div>Error loading book</div>;
  if (!data) return <div>Loading...</div>;

  const handleSubmit = async (values: Omit<Book, 'id'>) => {
    await updateBook(id || '', values);
    navigate('/');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Edit Book</Typography>
      <BookForm initialValues={data} onSubmit={handleSubmit} />
    </Container>
  );
};

export default EditBook;
