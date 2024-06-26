import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import { StatusProvider } from './contexts/StatusContext';

const App: React.FC = () => {
  return (
    <StatusProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/edit/:id" element={<EditBook />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StatusProvider>
  );
};

export default App;
