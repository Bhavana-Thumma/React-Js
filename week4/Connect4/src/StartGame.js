import React, {Component} from 'react';
import './App.css';
// import {BrowserRouter as Router, Link,Route} from 'react-router-dom';

class StartGame extends Component {
  constructor(props) {
    super(props)
    this.state = {currentUser:1,
      isCellDisabled: [[0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0]]}
  }

  componentDidMount() {
    const cells = document.getElementsByTagName("td")

    for (let index = 0; index < cells.length; index++) {
      cells[index].addEventListener("click", () => { 
        var id = Math.floor(index/7)
        var dec = index%7
        if (this.state.currentUser===1 && this.state.isCellDisabled[id][dec] ===0) {
          cells[index].style.backgroundColor=this.props.color[0];
          this.setState({currentUser:2})
          var listCell1 = this.state.isCellDisabled
          listCell1[id][dec] = 1
          this.setState({isCellDisabled:listCell1})
          this.checkWinner(id,dec)
        }
        else if (this.state.currentUser===2 && this.state.isCellDisabled[id][dec] ===0){
          cells[index].style.backgroundColor=this.props.color[1];
          this.setState({currentUser:1})
          var listCell = this.state.isCellDisabled
          listCell[id][dec] = 2
          this.setState({isCellDisabled:listCell})
          this.checkWinner(id,dec)
        }
       } );
    }
    
  }

  checkWinner = (id,dec) => {
    //Horizontal
    this.horizontal(id,dec)

    //vertical
    this.vertical(id,dec)
  } 

  horizontal = (id,dec) =>{
    var count = 0;
    var count2 = 0;

    var hor = dec;
    for (let index = 1; index < 5; index++) {
      hor++
      if (hor < 7) {
        if (this.state.isCellDisabled[id][hor] === 1 ) {
          console.log("blue"+id+hor)
          count++;
        }
        else {
          break
        }
      }
    }

    hor = dec;
    for (let index = 1; index < 5; index++) {
      hor--
      if (hor > -1) {
        if (this.state.isCellDisabled[id][hor] === 1 ) {
          console.log("blue"+id+hor)
          count++;
        }
        else {
          break
        }
      }
    }

    hor = dec;
    for (let index = 1; index < 4; index++) {
      hor++
      if (hor < 7) {
        if (this.state.isCellDisabled[id][hor] === 2 ) {
          console.log("yellow"+id+hor)
          count2++;
        }
        else {
          break
        }
      }
    }

    hor = dec;
    for (let index = 1; index < 4; index++) {
      hor--
      if (hor > -1) {
        if (this.state.isCellDisabled[id][hor] === 2 ) {
          console.log("yellow"+id+hor)
          count2++;
        }
        else {
          break
        }
      }
    }
 
    console.log(count+" "+count2)
    if (count >= 3){
      alert("Blue is the winner")
    }
    if (count2 >= 3){
      alert("Yellow is the winner")
    }
  }

  vertical = (id,dec) =>{
    var count = 0;
    var count2 = 0;

    var hor = id;
    for (let index = 1; index < 5; index++) {
      hor++
      if (hor < 6) {
        if (this.state.isCellDisabled[hor][dec] === 1 ) {
          console.log("blue"+dec+hor)
          count++;
        }
        else {
          break
        }
      }
    }

    hor = id;
    for (let index = 1; index < 5; index++) {
      hor--
      if (hor > -1) {
        if (this.state.isCellDisabled[hor][dec] === 1 ) {
          console.log("blue"+dec+hor)
          count++;
        }
        else {
          break
        }
      }
    }

    hor = id;
    for (let index = 1; index < 4; index++) {
      hor++
      if (hor < 6) {
        if (this.state.isCellDisabled[hor][dec] === 2 ) {
          console.log("yellow"+dec+hor)
          count2++;
        }
        else {
          break
        }
      }
    }

    hor = id;
    for (let index = 1; index < 4; index++) {
      hor--
      if (hor > -1) {
        if (this.state.isCellDisabled[hor][dec] === 2 ) {
          console.log("yellow"+dec+hor)
          count2++;
        }
        else {
          break
        }
      }
    }
 
    console.log(count+" "+count2)
    if (count >= 3){
      alert("Blue is the winner")
    }
    if (count2 >= 3){
      alert("Yellow is the winner")
    }
  }

  render() {
    return (
      <div>
        <h1>Connect 4</h1>
        <h2>Player1: {this.props.player[0]}  color: {this.props.color[0]}</h2>
        <h2>Player2: {this.props.player[1]}  color: {this.props.color[1]}</h2>

        <table>
          <tbody>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          </tbody>
        </table>
      </div>
      
    );
  }
}

export default StartGame;
