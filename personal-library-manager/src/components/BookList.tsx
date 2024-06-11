import { Grid } from '@mui/material';
import React from 'react';
import useSWR from 'swr';
import { getBooks } from '../services/api';
import { Book } from '../types/Book';
import BookItem from './BookItem';

const fetcher = (url: string) => getBooks().then(res => res.data);

const BookList: React.FC = () => {
  const { data, error } = useSWR('/books', fetcher);

  if (error) return <div>Error loading books</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Grid container spacing={2}>
      {data.map((book: Book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </Grid>
  );
};

export default BookList;
