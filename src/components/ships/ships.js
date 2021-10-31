import HabitatShips from "./habitat-ships/habitat-ships";
import BattleShips from "./battle-ships/battle-ships";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Ships(){
    return (
        <div>
            <h1>Ships</h1>
            <BrowserRouter>
                <Switch>
                    <Route path="/battleships">
                        <BattleShips/>
                    </Route>
                    <Route path="/habitatships">
                        <HabitatShips/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}


export default Ships;