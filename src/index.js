import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index.js';
import { BrowserRouter } from 'react-router-dom';

const AppWithRouting = ()=>(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)


ReactDOM.render(
    <AppWithRouting/>,
  document.getElementById('root')
);
