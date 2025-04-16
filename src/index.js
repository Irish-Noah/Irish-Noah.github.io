import React from 'react';
import ReactDOM from 'react-dom/client';  // Notice the change to 'react-dom/client'
//import './index.css';  // Optional: for global styling
import App from './App';  // Import the App component

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root for React

root.render(<App />);  // Use the 'render' method on the root to render the app