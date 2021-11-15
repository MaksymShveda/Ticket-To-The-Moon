
import React from "react";
import { Link } from "react-router-dom";
import { shipsMarketPath } from "../../constants";
import './index.css';
import { useState, useEffect } from "react";
import Loading from "../../core/loading";
import { timeSince } from "./utilities";




const Ships = ()=>{
   const [ships,setShips] = useState([]);
   const [sortType, setSortType] = useState("");
   const [isLoaded, setLoaded] =useState(false)
    const [searchValue, setSearch] = useState("")
    const [initialShips,setInitialShips] = useState([])
   useEffect( ()=>{
       const apiRequest = async ()=>{
        const response = await fetch("https://6129ebf1068adf001789b975.mockapi.io/api/ships");
        const shipsData = await response.json();
        await setShips((previous)=>shipsData);
        await setInitialShips((previous)=>shipsData);
        await setLoaded(true)
       }
       apiRequest()
   },[])


    useEffect(()=>{
        const sortShips = type =>{
            const sorted = [...ships].sort((a,b)=>{
                 switch (type) {
                    case "lowFirst":
                       return a.price-b.price;
                    case "highFirst":
                        return b.price-a.price;
                    case "newFirst":
                        return Date.parse(a.createdAt)-Date.parse(b.createdAt);
                    case "oldFirst":
                        return Date.parse(b.createdAt)-Date.parse(a.createdAt);
                   
            }
        })
        setShips(sorted);
        };
        sortShips(sortType)
    },[sortType]);
    
   useEffect(()=>{
       const searchByName =() =>{
        setShips(previous=>initialShips);
        setShips(prev=>prev.filter((ship)=>ship.shipName.toLowerCase().includes(searchValue.toLowerCase())))
       }
       searchByName()
   },[searchValue, initialShips]
   )

    return(
    <React.Fragment>
        {isLoaded ?
        (<div id="ships">
            <h1>There are {} ships ready for your purchase. Ship crew included.</h1>
            <div className="tools">
                <input type="search" placeholder="Search by name..." onInput={(e)=>setSearch(e.target.value)}></input>
                <select className="sort-select" onChange={(e)=>setSortType(e.target.value)}>
                    <option className="sort-option" value  hidden>Sort By</option>
                    <option className="sort-option" value="lowFirst">Low To High</option>
                    <option className="sort-option" value="highFirst">High To Low</option>
                    <option className="sort-option" value="newFirst">Recent first</option>
                    <option className="sort-option" value="oldFirst">Oldest first</option>
                </select>
            </div>
            <div id="ships-wrapper">
                {ships.map((ship)=>{
                    return (
                    <div className="ship-container" key={ship.id}>
                        <img src={ship.shipPhotos[0]}/>
                        <div className="ship-text-wrapper">
                            <h1 >{ship.shipName}</h1>
                            <h2>{ship.price +' universums'}</h2>
                            <p>{"Published for sale "+timeSince(ship.createdAt)}</p>
                        </div>
                    </div>
                )})}
            </div>
        </div>)
        :(
        <div className="loading-ships">
            <h3>Entering Market...</h3>
            <Loading/>
        </div>
        )}
    </React.Fragment>
    )
}




export default Ships;