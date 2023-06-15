import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import { About, NotFound, Posts, Users } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Users /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/posts/:id" element={ <Posts /> } />
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
