import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Logo from './Logo';
import MovieApp from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Logo />
    <MovieApp />
  </React.StrictMode>
);


