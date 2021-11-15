import { useState,useEffect } from "react"


const shipPage = ({id}) =>{
    const [shipData, setShipData] = useState();
    

    useEffect(async ()=>{
        const response = await fetch(`https://6129ebf1068adf001789b975.mockapi.io/api/ships/${id}`);
        const currentSpaceShip = response.json();

        setShipData(currentSpaceShip);
        console.log(shipData)
    }, [])

    return (
        <div>Ship</div>
    )
}

export default shipPage;