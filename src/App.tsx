import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import changeColor from './components/localStorage';
import FinalScreen from './pages/FinalScreen';
import Questions from './pages/Questions';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App">
    <input type="color" id="colorID" onChange={changeColor}></input>
    <input type="color" id="colorID2" onChange={changeColor}></input>
      <BrowserRouter>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
        <Typography variant="h2" fontWeight="bold" paddingBottom={"4rem"}>Quiz App </Typography>
        <Routes>
          <Route path="/" element= { <Settings />}/>  
          <Route path="/questions" element= {<Questions />}/>
          <Route path="/score" element= {<FinalScreen />}/>
        </Routes>
        </Box>
      </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
