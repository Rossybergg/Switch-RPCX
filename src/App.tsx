import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { api } from './api';
import { StatusData } from './interfaces/statusData';
import { StyledApp } from './styles/App.styles';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Card } from './components/card/Card';
import { baseGameData } from './constants/baseGameData';

const App = () => {
  const [successText, setSuccessText] = useState<string>('');
  const [successText2, setSuccessText2] = useState<string>('');
  const [selectedGame, setSelectedGame] = useState<StatusData>({
    game: 'Assassins Creed: The Ezio Collection',
    image: 'ezio',
  });

  useEffect(() => {
    api
      .get('/keepalive')
      .then((response) => {
        setSuccessText(response.data.status.toString());
      })
      .catch((err) => console.error(err));
  }, []);

  const updateStatus = () => {
    api
      .post('/status/update', selectedGame)
      .then(({ data }) => {
        setSuccessText2(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const horizontalScroll = (e) => {
    e.preventDefault();
    const delta = Math.max(-1, Math.min(1, e.nativeEvent.wheelDelta || -e.nativeEvent.detail));
    e.currentTarget.scrollLeft -= delta * 30;
  };

  return (
    <StyledApp>
      <Header />
      <div className="title-container">
        <div className="now-playing-title title">NOW PLAYING</div>
        <div className="game-title title">NEW ADDITIONS</div>
      </div>
      <div className="content-container">
        <div className="now-playing-container">
          <Card
            title={'The Legend Of Zelda: Skyward Sword'}
            imageSrc={
              'https://images.nintendolife.com/d0ae00f3e7408/legend-of-zelda-skyward-sword-hd-cover.cover_300x.jpg'
            }
            onClick={() => {
              updateStatus();
            }}
          />
        </div>
        <div className="card-container" onWheel={horizontalScroll}>
          {baseGameData.newGames.map((game) => (
            <Card
              title={game.title}
              imageSrc={game.cover}
              onClick={() => {
                updateStatus();
              }}
            />
          ))}
        </div>
      </div>
      <TextField
        className="input-field"
        label="Search Games"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Footer />
    </StyledApp>
  );
};

export default App;
