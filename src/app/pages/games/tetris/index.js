import React, { useState } from "react";

import {createStage} from "./components/stage/stageCreation";
import { checkCollision } from "./components/stage/gameCollision";
import StartButton from "./components/startbutton/StartButton";
import Display from "./components/display/Display";
import Stage from "./components/stage/Stage";
import { usePlayer } from "./components/hooks/usePlayer";
import { useStage } from "./components/hooks/useStage";
import { useInterval } from "./components/hooks/useInterval";
import { useGameStatus } from "./components/hooks/useGameStatus";
import './index.css';

const Tetris = () =>{
    const [dropTime, setDropTime] = useState(null);
    const [isGameOver, setGameOver] = useState(false);


    const [player, updatePlayerPos, resetPlayer,playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score,setScore,rows,setRows,level,setLevel] = useGameStatus(rowsCleared);

    const startGame = ()=>{
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
    }

    console.log("re-render")

    const movePlayer = direction =>{
        if(!checkCollision(player,stage, {x:direction, y:0})){
        updatePlayerPos({x:direction,y:0});
    }}
    
    const drop = () =>{
        if (rows>(level+1)*10){
            setLevel(prev=>prev+1);
            setDropTime(1000/(level+1)+200);
        }

        if (!checkCollision(player,stage,{x:0,y:1})){
            updatePlayerPos({x:0, y:1, collided:false});
        } else{
            if(player.pos.y<1){
                console.log("Game over");
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({x:0, y:0, collided:true})
        }
    }

    const keyUp =({keyCode})=>{
        if(!isGameOver){
            if(keyCode ===40){
                setDropTime(1000/(level+1)+200);
            }
        }
    }

    const dropPlayer = ()=>{
        setDropTime(null);
        drop();
    }

    const move =({keyCode})=>{
        if (!isGameOver){
            if(keyCode === 37){
                movePlayer(-1);
            } else if(keyCode === 39){
                movePlayer(1);
            } else if( keyCode === 40){
                dropPlayer()
            }
            else if(keyCode === 38){
                playerRotate(stage, 1);
            }
        }
    }

    useInterval(()=>{
        drop();
    },dropTime)

    return(
        <div id='tetris' role="button" tabIndex="0" onKeyDown={e=> move(e)} onKeyUp={keyUp}>
            <Stage stage={stage} />
            <aside>
                {isGameOver ? (
                    <Display gameOver={isGameOver} text="Game Over"/>
                ) : (
                <div>
                    <Display text={`Score: ${score}`} />
                    <Display text={`Rows: ${rows}`} />
                    <Display text={`Level: ${level}`} />
                </div>
                )}
                <StartButton callback={startGame}/>
            </aside>
        </div>
    )
}


export default Tetris