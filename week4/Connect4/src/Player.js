import React from "react";
import Game from './Game';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Player extends React.Component {
    constructor(props){
        super(props);
        this.state = {player1:"" , player2:"" , color1:"", color2: ""}

    }
    render()
    {
        return (
            <div>
            
            <h2>Player</h2>
            <input type='text' onChange={this.setPlayer1} id= 'player1' value={this.player1} placeholder='Enter Player1 Name'/>
            <input type='text' onChange={this.setColor1} id= 'color1' value={this.color1} placeholder='Enter Player1 Color'/><br/>
            <input type='text' onChange={this.setPlayer2} id= 'player2' value={this.player2} placeholder='Enter Player2 Name'/>      
            <input type='text' onChange={this.setColor2} id= 'color2' value={this.color2} placeholder='Enter Player2 Color'/><br/>
            <Router>
                <Link to="/Game"><button><p>Click Me!</p></button></Link>
                <Switch>
                <Route path="/Game">
                    <Game />
                </Route>
                </Switch>
            </Router>           

            </div>
        );
    }
    setColor1 =(e)=>{ this.setState({color1:e.target.value});  console.log(this.state.color1)}
    // console.log(this.state.color1)
    setColor2 =(e)=>{ this.setState({color2:e.target.value}); console.log(this.state.color2)}
    setPlayer1 =(e)=>{ this.setState({player1:e.target.value}); console.log(this.state.player1)}
    setPlayer2 =(e)=>{ this.setState({player2:e.target.value}); console.log(this.state.player2)}
    enter = () => {
        
        
    }
}
export default Player;
