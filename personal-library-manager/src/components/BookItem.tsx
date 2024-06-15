import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, CardActions, CardContent, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { deleteBook, getBooks } from '../services/api';
import { LibCard } from '../styled';
import { Book } from '../types/Book';
import ConfirmDialog from './ConfirmDialog';
import { useStatus } from '../contexts/StatusContext'; // Adjust import based on your folder structure

interface BookItemProps {
  book: Book;
}

const fetcher = () => getBooks().then((res) => res.data);

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  const navigate = useNavigate();
  const { mutate } = useSWR('/books', fetcher);
  const { setStatusMessage, setStatusSeverity, setStatusOpen } = useStatus();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleDelete = () => {
    setConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteBook(book.id);
      mutate(); // Re-fetch books list after successful deletion
      setConfirmOpen(false); // Close the dialog

      // Update status context
      setStatusMessage(`Book "${book.title}" deleted successfully`);
      setStatusSeverity('success');
      setStatusOpen(true);
    } catch (error) {
      console.error('Failed to delete book:', error);

      // Update status context
      setStatusMessage('Failed to delete book');
      setStatusSeverity('error');
      setStatusOpen(true);
    }
  };

  const handleCancelDelete = () => {
    setConfirmOpen(false); // Close the dialog without deleting
  };

  return (
    <>
      <LibCard>
        <CardContent>
          <Typography variant="h5">{book.title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {book.author}
          </Typography>
          <Typography variant="body2">
            <strong>Genre: </strong>
            {book.genre}
          </Typography>
          <Typography variant="body2">
            <strong>Description: </strong>
            {book.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => navigate(`/edit/${book.id}`)}
          >
            <EditIcon />
          </Button>
          <Button size="small" color="secondary" onClick={handleDelete}>
            <DeleteIcon />
          </Button>
        </CardActions>
      </LibCard>
      <ConfirmDialog
        open={confirmOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message={`Are you sure you want to delete "${book.title}"?`}
      />
    </>
  );
};

export default BookItem;
