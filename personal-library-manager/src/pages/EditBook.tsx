import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import BookForm from '../components/BookForm';
import Window from '../components/Window';
import { updateBook, getBook } from '../services/api';
import { LibContainer } from '../styled';
import { Book } from '../types/Book';
import ConfirmDialog from '../components/ConfirmDialog';
import { useStatus } from '../contexts/StatusContext';

const fetcher = (id: string) => getBook(parseInt(id)).then((res) => res.data);

const EditBook: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, error } = useSWR(id, fetcher);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [editedBook, setEditedBook] = useState<Omit<Book, 'id'> | null>(null);
  const { setStatusMessage, setStatusSeverity, setStatusOpen } = useStatus();

  useEffect(() => {
    if (error) {
      setStatusMessage('Error loading book');
      setStatusSeverity('error');
      setStatusOpen(true);
    }
  }, [error, setStatusMessage, setStatusSeverity, setStatusOpen]);

  if (error) return <div>Error loading book</div>;
  if (!data) return <div>Loading...</div>;

  const handleSubmit = async (values: Omit<Book, 'id'>) => {
    setEditedBook(values);
    setConfirmOpen(true);
  };

  const handleEdit = async () => {
    try {
      await updateBook(id || '', editedBook!);
      setStatusSeverity('success');
      setStatusMessage('Book updated successfully');
      setStatusOpen(true);
      navigate('/');
    } catch (error) {
      console.error('Failed to update book:', error);
      setStatusSeverity('error');
      setStatusMessage('Failed to update book');
      setStatusOpen(true);
    }
  };

  const handleConfirmEdit = () => {
    handleEdit();
    setConfirmOpen(false);
  };

  const handleCancelEdit = () => {
    setConfirmOpen(false);
  };

  return (
    <Window>
      <LibContainer>
        <Typography variant="h4" gutterBottom>
          Edit Book
        </Typography>
        <BookForm initialValues={data} onSubmit={handleSubmit} />
      </LibContainer>
      <ConfirmDialog
        open={confirmOpen}
        onClose={handleCancelEdit}
        onConfirm={handleConfirmEdit}
        title="Confirm Edit"
        message={`Are you sure you want to update details of the book with title "${data.title}"?`}
      />
    </Window>
  );
};

export default EditBook;
