import {Link} from 'react-router-dom';
import Tetris from './tetris';
import Memo from './memo';
import {tetrisPath, memoPath} from '../../constants'
import tetrisLogo from '../../assets/images/tetris.png';
import memoLogo from '../../assets/images/memo.png'
import './index.css'

function Games(){
    return(
        <div id="games">
            <h1>Choose The Game To Earn universums</h1>
            <Link to={tetrisPath} className="game-link">
                <div>
                    <img src={tetrisLogo} alt="Tetris" className="tetris-logo"></img>
                    <h3 className="game-name">Tetris</h3>
                </div>
            </Link>
            <Link to={memoPath} className="game-link">
                <div>
                    <img src={memoLogo} alt="Memo Game" className="memo-logo"></img>
                    <h3>Memo Game</h3>
                </div>
            </Link>
        </div>
    )
};


export default Games