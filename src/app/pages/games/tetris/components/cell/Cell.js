import React from 'react';
import './cell.css';
import { tetrominos } from '../stage/tetrominos';
const Cell = ({type})=>{
    return (
        <div className='cell' style={{backgroundColor:`rgba(${tetrominos[type].color}, 0.8)`,
            border:{type}===0?'0px solid':'4px solid',
            borderBottomColor: `rgba(${tetrominos[type].color}, 0.1)`,
            borderRightColor: `rgba(${tetrominos[type].color}, 1)`,
            borderTopColor: `rgba(${tetrominos[type].color}, 1)`,
            borderLeftColor: `rgba(${tetrominos[type].color}, 0.3)`,
        }}></div>
    )
};


export default React.memo(Cell);