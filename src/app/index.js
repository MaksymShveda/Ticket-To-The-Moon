import './index.css';
import { Route, Switch } from 'react-router-dom';
import Ships from './pages/ships/index.js';
import UserProfile from './pages/user-profile/index.js';
import MainPage from './pages/home/index';
import Games from './pages/games/index.js';
import Layout from './core/layout/index.js';

const App =()=> {
return (
  
<Layout>
      <Switch>
        <Route path="/">
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
      </Switch>
</Layout>
 
)
}

export default App;
