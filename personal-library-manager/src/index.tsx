import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Get the container element
const container = document.getElementById('root');

// Check if the container is not null
if (container) {
  // Create a root and render the App component
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
} else {
  console.error('Root container is missing in the DOM.');
}
