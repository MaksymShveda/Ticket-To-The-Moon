
import './startbutton.css'


const StartButton = ({callback}) => {
    return(
        <button onClick={callback} id="start-tetris-game">Start Game</button>
    )
};

export default StartButton;