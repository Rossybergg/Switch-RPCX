import React, {useState, useEffect} from 'react';
import {api} from './api';
import { StatusData } from './interfaces/statusData';

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
    <div>
      <h2>Electron is running!</h2>
      <p>Fetched api response from server: {successText}</p>
      <p>Status updated?: {successText2}</p>
      <button
        onClick={() => {
          updateStatus()
        }}
      >
        Click ME
      </button>
    </div>
)
  ;
};

export default App;
