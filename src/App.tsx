import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/system';
import { Button } from '@mui/material';

function App() {
  return (
   <Container maxWidth="xl">
    <Button fullWidth variant="contained">Hola Mundo</Button>
   </Container>
  );
}

export default App;
