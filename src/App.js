import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          CarePal App
        </Typography>
        <nav style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
          <Button component={Link} to="/" variant="contained">Home</Button>
          <Button component={Link} to="/jobs" variant="contained">Jobs</Button>
          <Button component={Link} to="/signup" variant="outlined">Sign Up</Button>
          <Button component={Link} to="/login" variant="outlined">Log In</Button>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;