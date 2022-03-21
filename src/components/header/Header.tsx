import React, { useState, useEffect } from 'react';
import WifiIcon from '@mui/icons-material/Wifi';
import Avatar from '@mui/material/Avatar';
import { StyledHeader } from './Header.styles';
import logo from '../../assets/images/logo.png';

export const Header = () => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <StyledHeader>
      <div className="logo-container">
        <Avatar className="logo-avatar" alt="logo" src={logo} />
      </div>
      <div className="header-text">
        {dateState.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        })}
      </div>
      <div className="connection-container">
        <WifiIcon />
      </div>
    </StyledHeader>
  );
};
