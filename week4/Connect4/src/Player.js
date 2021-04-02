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
        this.state = {player1:"" , player2:"" , color1:"", color2: "", result:""}

    }
    render()
    {
        return (
            <div id='inp'>
            
            <h2>Player</h2>
            <input type='text' onChange={this.setPlayer1} id= 'player1' value={this.player1} placeholder='Enter Player1 Name'/>
            <input type='text' onChange={this.setColor1} id= 'color1' value={this.color1} placeholder='Enter Player1 Color'/><br/>
            <input type='text' onChange={this.setPlayer2} id= 'player2' value={this.player2} placeholder='Enter Player2 Name'/>      
            <input type='text' onChange={this.setColor2} id= 'color2' value={this.color2} placeholder='Enter Player2 Color'/><br/>
            <Router>
                <Link to="/Game"><button onClick={this.enter}><p>Start</p></button></Link>
                {/* <h2>{this.state.result}</h2> */}
                <h2 style={{color:'grey'}} id="result"></h2>
                <Switch>
                <Route path="/Game">
                    <Game player1={this.state.player1} player2={this.state.player2} color1={this.state.color1} color2={this.state.color2}/>
                </Route>
                </Switch>
            </Router>     
            </div>
            
        );
    }
    // componentDidMount(){
    //     document.getElementById('refer').style.display = "none"
    // }
    setColor1 =(e)=>{ this.setState({color1:e.target.value});  console.log(this.state.color1)}
    // console.log(this.state.color1)
    setColor2 =(e)=>{ this.setState({color2:e.target.value}); console.log(this.state.color2)}
    setPlayer1 =(e)=>{ this.setState({player1:e.target.value}); console.log(this.state.player1)}
    setPlayer2 =(e)=>{ this.setState({player2:e.target.value}); console.log(this.state.player2)}
    enter = () => {
            
        this.setState({result:this.state.player1+": "+this.state.color1+" and "+this.state.player2+": "+this.state.color2})
        document.getElementById('player1').value=""
        document.getElementById('player2').value=""
        document.getElementById('color1').value=""
        document.getElementById('color2').value=""
        // document.getElementById('refer').style.display = "block"
        // document.getElementById('inp').style.display = "none"
        
    }
}
export default Player;
