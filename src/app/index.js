import './index.css';
import { Route, Switch } from 'react-router-dom';
import Tetris from './pages/games/tetris';
import Ships from './pages/ships/index.js';
import UserProfile from './pages/user-profile/index.js';
import MainPage from './pages/home/index';
import Games from './pages/games/index.js';
import Layout from './core/layout/index.js';
import React from 'react';
import { homePath,shipsMarketPath, myProfile, signUpPath, gamesPath,tetrisPath,memoPath } from './constants';
import SignUp from './pages/sign-in'
const App = () =>{



return (
  
<Layout>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route path="/ships">
          <Ships/>
        </Route>
        <Route path="/user-profile">
          <UserProfile/>
        </Route>
        <Route path="/games">
          <Games/>
        </Route>
        <Route path={signUpPath}>
          <SignUp/>
        </Route>
        <Route path={tetrisPath}>
          <Tetris/>
        </Route>
      </Switch>
</Layout>
 
)
}


export default App;
