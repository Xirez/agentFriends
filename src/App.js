import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    render() {
        const searchResults = this.state.robots.filter(robot => {
            return (
                robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            );
        })
        return (
            <div className='tc'>
                <p className='logo'> agentFriends </p>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={searchResults} />
            </div>
        );
    }

}

export default App;