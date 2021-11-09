import Cell from "../cell/Cell";
import './stage.css';



const Stage = ({stage}) =>{
    return (
        <div id='stage' style={{gridTemplateRows:`repeat(${stage.length},calc(20vw/${stage[0].length}))`,
        gridTemplateColumns:`repeat(${stage[0].length}, 1fr)`
        }}>
            {stage.map(row=>row.map((cell,x)=><Cell key={x} type={cell[0]}/>))}
        </div>
    )
};


export default Stage;