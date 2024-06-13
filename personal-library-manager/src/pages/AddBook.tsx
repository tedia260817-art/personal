import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import ConfirmDialog from '../components/ConfirmDialog';
import Window from '../components/Window';
import { useStatus } from '../contexts/StatusContext';
import { addBook } from '../services/api';
import { LibContainer } from '../styled';
import { Book } from '../types/Book';

const AddBook: React.FC = () => {
  const navigate = useNavigate();
  const { setStatusMessage, setStatusSeverity, setStatusOpen } = useStatus();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [newBook, setNewBook] = useState<Omit<Book, 'id'>>({
    title: '',
    author: '',
    genre: '',
    description: '',
  });

  const handleSubmit = async (values: Omit<Book, 'id'>) => {
    setNewBook(values);
    setConfirmOpen(true);
  };

  const handleAdd = async () => {
    try {
      await addBook(newBook);
      navigate('/');
      setStatusMessage('Book added successfully');
      setStatusSeverity('success');
      setStatusOpen(true);
    } catch (error) {
      console.error('Failed to add book:', error);
      setStatusMessage('Failed to add book');
      setStatusSeverity('error');
      setStatusOpen(true);
    }
  };

  const handleConfirmAdd = () => {
    handleAdd();
    setConfirmOpen(false);
  };

  const handleCancelAdd = () => {
    setConfirmOpen(false);
  };

  return (
    <Window>
      <LibContainer>
        <Typography variant="h4" gutterBottom>Add New Book</Typography>
        <BookForm initialValues={{ title: '', author: '', genre: '', description: '' }} onSubmit={handleSubmit} />
      </LibContainer>
      <ConfirmDialog
        open={confirmOpen}
        onClose={handleCancelAdd}
        onConfirm={handleConfirmAdd}
        title="Confirm Addition"
        message={`Are you sure you want to add a book with title "${newBook.title}"?`}
      />
    </Window>
  );
};

export default AddBook;
