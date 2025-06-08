import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';

function App() {
  return (
    <Router>
      <Container maxWidth="sm" style={{ marginTop: "3rem", textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          CarePal
        </Typography>
        <Button component={Link} to="/" variant="contained" color="primary" sx={{ m: 1 }}>
          Home
        </Button>
        <Button component={Link} to="/jobs" variant="outlined" color="primary" sx={{ m: 1 }}>
          Jobs
        </Button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;