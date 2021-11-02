import './index.css';
import { Link } from 'react-router-dom';
import { signInPath } from '../../constants';

function MainPage(){
    return (
        <div>
            <h1>
                Your own space armada is waiting for your command, sir.
            </h1>
            <p>
                Join a market, with over 6000 spaceships and traders from 64 planets.<br />
                Earn money by playing games.<br/>
                Buy your own spaceship and compete other players, becoming the Greatest Space Commander.
            </p>
            <Link to={signInPath}>
                <button>Buy a ticket to the Moon</button>
            </Link>
        </div>
    )
}

export default MainPage;