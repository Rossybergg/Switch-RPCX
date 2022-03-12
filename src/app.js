import React, {useState, useEffect} from 'react';
import {api} from './api';

const App = () => {
  const [successText, setSuccessText] = useState(null);
  const [successText2, setSuccessText2] = useState('');
  const [selectedGame, setSelectedGame] = useState({game: 'Mario Kart 8 Deluxe', image: 'mk8'});

  useEffect(() => {
    api.get('/test')
      .then(({ data }) => setSuccessText(data))
      .catch(err => console.error(err));
  });

  const updateStatus = () => {
    api.post('/updateStatus', selectedGame).then(({data}) => { setSuccessText2(data) })
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
