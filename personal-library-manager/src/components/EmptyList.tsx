import { Button, Typography, Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookIcon from '@mui/icons-material/Book';

const EmptyList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" margin={2}>
      <Typography variant="h6" gutterBottom>
        Start adding your first book in the library
      </Typography>
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={() => navigate('/add')}
        startIcon={<BookIcon />} // Add the icon to the button
      >
        Add a New Book
      </Button>
    </Box>
  );
};

export default EmptyList;
