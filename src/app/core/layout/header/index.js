import "./index.css"
import {homePath,shipsMarketPath,myProfile,signInPath,gamesPath} from '../../../constants/index';
import { NavLink } from "react-router-dom";
import logo from '../../../back/images/logo.png'



function Header(){
    return (
        <header>
            <div id="logo">
                    <img src={logo} alt="Ticket To The Moon"/>
                    <h1>Ticket To The Moon</h1>
            </div>
            <nav>
                <NavLink to={homePath} className="link">
                    Home
                </NavLink>
                <NavLink to={shipsMarketPath} className="link">
                    Ship market
                </NavLink>
                <NavLink to={gamesPath} className="link">
                    Games
                </NavLink>
                <NavLink to={myProfile} className="link">
                   My Profile
                </NavLink>
            </nav>
        </header>
    )

    
}


export default Header