import './index.css';
import { Link } from 'react-router-dom';
import { signInPath } from '../../constants';
import React from 'react';


class MainPage extends React.Component{
    // Test for changing background image
    // componentDidMount(){
    //     let imageIndex = 2;
    //     let imageChangingTimeout = setTimeout(function changeBackgroundImage(){
    //         console.log(imageIndex)
    //     document.body.style.backgroundImage = `url('/spaceship-main-${imageIndex}.jpg')`;
    //     imageIndex === 3 ? imageIndex = 1:imageIndex +=1;
    //     imageChangingTimeout = setTimeout(changeBackgroundImage, 10000);
    //     }, 10000);
    // };


    render(){
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
}}

export default MainPage;