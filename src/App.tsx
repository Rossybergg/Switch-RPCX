import React, { useState, useEffect } from 'react';
import { api } from './api';
import { StatusData } from './interfaces/statusData';
import Button from '@mui/material/Button';
import { StyledApp } from './styles/App.styles';
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer';
import { Card } from './components/card/Card';

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
    api.post('/status/update', selectedGame).then(({data}) => {
      setSuccessText2(data)
    })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <StyledApp>
      <Header/>
      <div className="popular-games">
        POPULAR GAMES
      </div>
      <div className="card-container">
        <Card imageSrc={'https://images.nintendolife.com/d0ae00f3e7408/legend-of-zelda-skyward-sword-hd-cover.cover_300x.jpg'} onClick={() => {alert('hi')}}/>
        <Card imageSrc={'https://images.nintendolife.com/15a20bc6c7642/legend-of-zelda-breath-of-the-wild-cover.cover_300x.jpg'} onClick={() => {alert('hi')}}/>
        <Card imageSrc={'https://images.nintendolife.com/802713810685c/mario-kart-8-deluxe-cover.cover_300x.jpg'} onClick={() => {alert('hi')}}/>
      </div>
      {/*<p>Fetched api response from server: {successText}</p>*/}
      {/*<p>Status updated?: {successText2}</p>*/}
      {/*<Button*/}
      {/*  onClick={() => {*/}
      {/*    updateStatus()*/}
      {/*  }}*/}
      {/*  variant="contained">Hello World</Button>*/}
      <Footer/>
    </StyledApp>
  )
    ;
};

export default App;
