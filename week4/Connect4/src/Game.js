import React from "react";
import './Game.css';
import './Player.css';
class Game extends React.Component{
    constructor(props){
        super(props)
        this.state={
            player:1,
            board: [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]],
            winner: "",
            color: this.props.color1,
            c1: 0,
            c2: 0
            
        }
    }
    render(){

        return(
            <div>
                <div id='refer'>
                  <p>{this.props.player1}</p>
                  <div id ='clr' style={{backgroundColor:this.props.color1}}></div>
                  <p>{this.props.player2}</p>
                  <div id ='clr' style={{backgroundColor:this.props.color2}}></div>
                </div>
                <table id="grid">
                <tbody>
                <tr><td id='12'></td><td id='12' className='r1 c2'></td><td id='13' className='r1 c3'></td><td id='14' className='r1 c4'></td><td id='15' className='r1 c5'></td><td id='16' className='r1 c6'></td><td id='17' className='r1 c7'></td></tr>
                <tr><td id='21'></td><td id='22' className='r2 c2'></td><td id='23' className='r2 c3'></td><td id='24' className='r2 c4'></td><td id='25' className='r2 c5'></td><td id='26' className='r2 c6'></td><td id='27' className='r2 c7'></td></tr>
                <tr><td id='31'></td><td id='32' className='r3 c2'></td><td id='33' className='r3 c3'></td><td id='34' className='r3 c4'></td><td id='35' className='r3 c5'></td><td id='36' className='r3 c6'></td><td id='37' className='r3 c7'></td></tr>
                <tr><td id='41'></td><td id='42' className='r4 c2'></td><td id='43' className='r4 c3'></td><td id='44' className='r4 c4'></td><td id='45' className='r4 c5'></td><td id='46' className='r4 c6'></td><td id='47' className='r4 c7'></td></tr>
                <tr><td id='51'></td><td id='52' className='r5 c2'></td><td id='53' className='r5 c3'></td><td id='54' className='r5 c4'></td><td id='55' className='r5 c5'></td><td id='56' className='r5 c6'></td><td id='57' className='r5 c7'></td></tr>
                <tr><td id='61'></td><td id='62' className='r6 c2'></td><td id='63' className='r6 c3'></td><td id='64' className='r6 c4'></td><td id='65' className='r6 c5'></td><td id='66' className='r6 c6'></td><td id='67' className='r6 c7'></td></tr>
                </tbody>
                </table>
            </div>
        );
    }
    
    // refresh = () => {
    //   window.location.reload(false)
    // }
    checkWinner = (b) =>{
       let w = (this.checkVertical(b) || this.checkDiagonalRight(b) || this.checkDiagonalLeft(b) || this.checkHorizontal(b))
        if(w === 1){
            document.getElementById("result").innerHTML = "Congrats "+this.props.player1+ "!" +"\<br\> you took "+this.state.c1+" turns"
            document.getElementById("grid").style.display = "none"
            document.getElementById('refer').style.display = "none"
            
            // document.getElementById('but').innerHTML= "\<button "className=\'button\' onClick=\{this.refresh\}"\>\<span\>Start\</span\>\</button\>"
            document.getElementById('but').innerHTML= `<button  onclick=${"location.reload()"}>Replay</button>`;

        }
        else if(w === 2){
            document.getElementById("result").innerHTML =  "Congrats "+this.props.player2+ "!" +"\<br\> you took "+this.state.c2+" turns"
            document.getElementById("grid").style.display = "none"
            document.getElementById('refer').style.display = "none"
            document.getElementById('but').innerHTML= `<button  onclick=${"location.reload()"}>Replay</button>`;
        }
      }
    checkVertical(board) {
        for (let r = 3; r < 6; r++) {
          for (let c = 0; c < 7; c++) {
            if (board[r][c] === board[r - 1][c] &&
                board[r][c] === board[r - 2][c] &&
                board[r][c] === board[r - 3][c]) {
            return board[r][c];    
            }
          }
        }
    }

    checkHorizontal(board) {
        for (let r = 0; r < 6; r++) {
          for (let c = 0; c < 4; c++) {
            if (board[r][c] === board[r][c + 1] && 
                board[r][c] === board[r][c + 2] &&
                board[r][c] === board[r][c + 3]) {
            return board[r][c];
            }
          }
        }
      }
      
      checkDiagonalRight(board) {
        for (let r = 3; r < 6; r++) {
          for (let c = 0; c < 4; c++) {
            if (board[r][c] === board[r - 1][c + 1] &&
                board[r][c] === board[r - 2][c + 2] &&
                board[r][c] === board[r - 3][c + 3]) {
            return board[r][c];
            }
          }
        }
      }
      
      checkDiagonalLeft(board) {
        for (let r = 3; r < 6; r++) {
          for (let c = 3; c < 7; c++) {
            if (board[r][c] === board[r - 1][c - 1] &&
                board[r][c] === board[r - 2][c - 2] &&
                board[r][c] === board[r - 3][c - 3]) {
            return board[r][c];
            }
          }
        }
      }
      


    componentDidMount()
    {
        document.getElementById('refer').style.display = "block"
        const grid= document.getElementById("grid");
        const cells = grid.getElementsByTagName("td");
        for(let i=0; i < cells.length; i++){
            cells[i].addEventListener("click", ()=>{
                var col = i%7
                var row = Math.floor(i/7)
                if(cells[i].style.backgroundColor !== this.props.color2 && cells[i].style.backgroundColor !== this.props.color1){
                    if(this.state.player === 1){
                        cells[i].style.backgroundColor=this.props.color1;
                        var b = this.state.board
                        b[row][col] = 1
                        this.setState({c1: this.state.c1+1})
                        console.log("c1", this.state.c1)
                        this.setState({board: b})
                        console.log(this.state.board, row, col)
                        this.checkWinner(b)
                        this.setState({player:2});
                        this.setState({color:this.props.color2});
                    }
                    if(this.state.player===2){
                        while(true){
                          var min = 0;
                          var max = 41;
                          var rand =  Math.floor(min + (Math.random() * (max-min)));
                          console.log(rand)
                          var col = rand%7
                          var row = Math.floor(rand/7)
                          console.log("row, col : "+row+" "+col)
                          if(cells[rand].style.backgroundColor !== this.props.color2 && cells[rand].style.backgroundColor !== this.props.color1){
                            cells[rand].style.backgroundColor=this.props.color2;
                            break; 
                          }
                        
                        }                       
                        b = this.state.board
                        b[row][col] = 2
                        this.setState({c2: this.state.c2+1})
                        console.log("c2",this.state.c2)
                        this.setState({board: b})
                        console.log(this.state.board, row, col)
                        this.checkWinner(b)
                        this.setState({player:1});
                        this.setState({color:this.props.color1});
                    }
                }
            });
        }
    }


}
export default Game;
