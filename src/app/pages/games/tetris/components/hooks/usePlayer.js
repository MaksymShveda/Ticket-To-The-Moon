import { useCallback, useState } from "react";
import { checkCollision } from "../stage/gameCollision";
import { getRandomTetrominos, tetrominos } from "../stage/tetrominos";


export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos:{x:0,y:0},
        tetromino: tetrominos[0].shape,
        collided: false,
    });

    const rotate=(matrix, direction)=>{
        const rotatedTetromino=matrix.map((_, index)=>
            matrix.map(col=>col[index]))

        if(direction>0) return rotatedTetromino.map(row=>row.reverse());
        return rotatedTetromino.reverse();

    }
    const playerRotate = (stage,direction)=>{
        const playerClone = JSON.parse(JSON.stringify(player));
        playerClone.tetromino = rotate(playerClone.tetromino, direction);

        const position = playerClone.pos.x;
        let offset=1;
        while(checkCollision(playerClone, stage,{x:0, y:0})){
            playerClone.pos.x +=offset;
            offset = -(offset + (offset>0?1:-1));
            if(offset>playerClone.tetromino[0].length){
                rotate(playerClone.tetromino, -direction);
                player.pos.x = position;
                return
            }
        }

        setPlayer(playerClone);
    }

    const updatePlayerPos = ({x,y,collided})=>{
        setPlayer(previous=>({
            ...previous,
            pos:{x:(previous.pos.x+=x), y:(previous.pos.y+=y)},
            collided,
        }))
    }

    const resetPlayer = useCallback(()=>{
        setPlayer({
            pos:{x:12/2-2,y:0},
            tetromino:getRandomTetrominos().shape,
            collided:false,
        })
    },[])
    
    return [player, updatePlayerPos, resetPlayer, playerRotate];
}