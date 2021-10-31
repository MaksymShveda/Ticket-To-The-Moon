import './App.css';
import Header from "./components/header/header.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Ships from './components/ships/ships';
import UserProfile from './components/user-profile/user-profile';
import MainPage from './components/main/main-page';

function App() {
return (
  <div id="app">
  <Header/>
  <BrowserRouter>
    <Switch>
      <Route strict path="/">
        <MainPage/>
      </Route>
      <Route path="/ships">
        <Ships/>
      </Route>
      <Route path="/user-profile">
        <UserProfile/>
      </Route>
    </Switch>
  </BrowserRouter>
 </div>
)
}

export default App;
