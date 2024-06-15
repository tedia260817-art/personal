import axios from 'axios';
import { Book } from '../types/Book';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Assuming mock server runs on this URL
});

export const getBooks = () => api.get('/books');
export const getBook = (id: number) => api.get(`/books/${id}`);
export const addBook = (book: Omit<Book, 'id'>) => api.post('/books', book);
export const updateBook = (id: string, book: Omit<Book, 'id'>) =>
  api.put(`/books/${id}`, book);
export const deleteBook = (id: string) => api.delete(`/books/${id}`);
