import React from "react";
import Cardlist from "./Cardlist";

import Searchbox from './Searchbox';

class App extends React.Component {
    constructor(){
        // Calls constructor of Component
        super();
        // Set state
        this.state ={
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ 
            searchfield: event.target.value
        })
    }
    
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <Searchbox searchChange = {this.onSearchChange} />
                <Cardlist robots = {filteredRobots}/>
            </div>
        )
    }
}

export default App;