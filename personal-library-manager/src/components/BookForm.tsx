import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { Book } from '../types/Book';

interface BookFormProps {
  initialValues: Omit<Book, 'id'>;
  onSubmit: (values: Omit<Book, 'id'>) => void;
}

const validationSchema = Yup.object({
  title: Yup.string()
    .min(2, 'Title must be at least 2 characters long')
    .max(100, 'Title must be at most 100 characters long')
    .required('Title is required'),
  author: Yup.string()
    .min(2, 'Author must be at least 2 characters long')
    .max(50, 'Author must be at most 50 characters long')
    .required('Author is required'),
  genre: Yup.string()
    .min(2, 'Genre must be at least 2 characters long')
    .max(50, 'Genre must be at most 50 characters long')
    .required('Genre is required'),
  description: Yup.string()
    .min(10, 'Description must be at least 10 characters long')
    .max(500, 'Description must be at most 500 characters long')
    .required('Description is required'),
});

const BookForm: React.FC<BookFormProps> = ({ initialValues, onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Book Details</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Title"
            placeholder="Adventures of Huckleberry Finn"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="author"
            name="author"
            placeholder="Mark Twain"
            label="Author"
            value={formik.values.author}
            onChange={formik.handleChange}
            error={formik.touched.author && Boolean(formik.errors.author)}
            helperText={formik.touched.author && formik.errors.author}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="genre"
            name="genre"
            label="Genre"
            placeholder="Adventure"
            value={formik.values.genre}
            onChange={formik.handleChange}
            error={formik.touched.genre && Boolean(formik.errors.genre)}
            helperText={formik.touched.genre && formik.errors.genre}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            placeholder="This book..."
            multiline
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default BookForm;
