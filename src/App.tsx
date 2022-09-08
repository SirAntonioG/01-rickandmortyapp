import React from 'react';
import { Box } from '@mui/material';
import './index.css';
import Characters from './components/Characters';
import CharacterPage from './components/CharacterPage';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Box>
        <Header />
        <Routes>
          <Route path='/' element={<Characters />} />
          <Route path='/character/:id' element={<CharacterPage />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
