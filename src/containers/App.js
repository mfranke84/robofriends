import React, { Component } from 'react';
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    // Fetch user data from API when App is loaded
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        }).then(users => {
            this.setState({robots: users});
        })
      
        
    }
    
    // When it is typed in search field, set the value 
    onSearchChange = (event) => {
        this.setState( { searchField: event.target.value })
    }

    // DOM
    render() {
        const {robots, searchField} = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (!robots.length) ? 
             (<h1>Loading</h1>) : 
             (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots = {filterRobots} />
                    </Scroll>
                </div>
                
            );
        
    }
}

export default App;