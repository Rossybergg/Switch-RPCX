import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './styles/index.css'


window.onload = () => {
    ReactDOM.render(<App />, document.getElementById('app'));
};
