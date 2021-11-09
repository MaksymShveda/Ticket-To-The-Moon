
import './display.css';

const Display = ({text, isGameOver})=>{
    return (
        <div className="display" style={{color:isGameOver? 'red':'#999'}}>{text}</div>
    )
};


export default Display;