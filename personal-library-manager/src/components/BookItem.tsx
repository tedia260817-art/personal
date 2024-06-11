import React from 'react';
import { Book } from '../types/Book';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../services/api';
import useSWR from 'swr';

interface BookItemProps {
  book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  const navigate = useNavigate();
  const { mutate } = useSWR('/books');

  const handleDelete = async () => {
    await deleteBook(book.id);
    mutate();
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{book.title}</Typography>
        <Typography variant="body2" color="textSecondary">{book.author}</Typography>
        <Typography variant="body2">{book.genre}</Typography>
        <Typography variant="body2">{book.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => navigate(`/edit/${book.id}`)}>
          Edit
        </Button>
        <Button size="small" color="secondary" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookItem;
