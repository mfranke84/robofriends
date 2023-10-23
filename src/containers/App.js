import { Component } from "react";
import Cardlist from "../components/Cardlist";
import Scroll from '../components/Scroll';
import Searchbox from '../components/Searchbox';

class App extends Component {
    constructor(){
        // Calls constructor of Component
        super();
        // Set state
        this.state ={
            robots: [],
            searchfield: ''
        }
    }

    async getUsers(){
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json()
        this.setState({robots: users})
    }

    componentDidMount(){
        this.getUsers()
    }

    onSearchChange = (event) => {
        this.setState({ 
            searchfield: event.target.value
        })
    }
    
    render() {
        const {robots, searchfield} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (!robots.length){
            return <h1>Loading</h1>
        }
        else{
            return(
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <Searchbox searchChange = {this.onSearchChange} />
                    <Scroll>
                        <Cardlist robots = {filteredRobots}/>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;