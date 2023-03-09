import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { Outlet} from 'react-router-dom'
import changeColor from './components/localStorage';


function App() {
  return (
    <div className="App">
    <input type="color" id="colorID" onChange={changeColor}></input>
    <input type="color" id="colorID2" onChange={changeColor}></input>

      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
        <Typography variant="h2" fontWeight="bold" paddingBottom={"4rem"}>Quiz App </Typography>
        <Outlet/>
        </Box>
      </Container>
 
    </div>
  );
}

export default App;
