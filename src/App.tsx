import React, {useState, useEffect} from 'react';
import {api} from './api';
import { StatusData } from './interfaces/statusData';
import Button from '@mui/material/Button';
import { StyledApp } from './styles/App.styles';

const App = () => {
  const [successText, setSuccessText] = useState<string>('');
  const [successText2, setSuccessText2] = useState<string>('');
  const [selectedGame, setSelectedGame] = useState<StatusData>({game: 'Mario Kart 8 Deluxe', image: 'mk8'});

  useEffect(() => {
    api.get('/keepalive')
      .then((response => {
        setSuccessText(response.data.status.toString())
      }))
      .catch(err => console.error(err));
  }, []);

  const updateStatus = () => {
    api.post('/status/update', selectedGame).then(({data}) => { setSuccessText2(data) })
      .catch( (error) => {console.log(error)})
  }

  return (
    <StyledApp>
      <h2>Electron is running!</h2>
      <p>Fetched api response from server: {successText}</p>
      <p>Status updated?: {successText2}</p>
      <Button
        onClick={() => {alert('hi')}}
        variant="contained">Hello World</Button>
    </StyledApp>
)
  ;
};

export default App;
