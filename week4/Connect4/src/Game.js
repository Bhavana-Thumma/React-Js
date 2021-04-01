import React from "react";
import './Game.css';
class Game extends React.Component{
    constructor(props){
        super(props)
        this.state={
            player:1
        }
    }
    render(){

        return(
            <div>
                <table id="grid">
                <tr><td id='11' value='11'></td> <td id='12' value='12'></td> <td id='13' value='13'></td> <td id='14' value='14'></td> <td id='15' value='15'></td> <td id='16' value='16'></td></tr>
                <tr><td id='21' value='21'></td> <td id='22' value='22'></td> <td id='23' value='23'></td> <td id='24' value='24'></td> <td id='25' value='25'></td> <td id='26' value='26'></td></tr>
                <tr><td id='31' value='31'></td> <td id='32' value='32'></td> <td id='33' value='33'></td> <td id='34' value='34'></td> <td id='35' value='35'></td> <td id='36' value='36'></td></tr>
                <tr><td id='41' value='41'></td> <td id='42' value='42'></td> <td id='43' value='43'></td> <td id='44' value='44'></td> <td id='45' value='45'></td> <td id='46' value='46'></td></tr>
                <tr><td id='51' value='51'></td> <td id='52' value='52'></td> <td id='53' value='53'></td> <td id='54' value='54'></td> <td id='55' value='55'></td> <td id='56' value='56'></td></tr>
                <tr><td id='61' value='61'></td> <td id='62' value='62'></td> <td id='63' value='63'></td> <td id='64' value='64'></td> <td id='65' value='65'></td> <td id='66' value='66'></td></tr>
                <tr><td id='71' value='71'></td> <td id='72' value='72'></td> <td id='73' value='73'></td> <td id='74' value='74'></td> <td id='75' value='75'></td> <td id='76' value='76'></td></tr>
                </table>
            </div>
        );
    }
    CALL = (i) => {
        // console.log(i%6, Math.floor(i/6))
        const grid= document.getElementById("grid");
        const cells = grid.getElementsByName
        for(let j=0; j < cells.length; j++){

    }
    componentDidMount(){
        const grid= document.getElementById("grid");
        const cells = grid.getElementsByTagName("td");
        for(let i=0; i < cells.length; i++){
            cells[i].addEventListener("click", ()=>{
                if(this.state.player==1){
                    cells[i].style.backgroundColor="red";
                    this.CALL(i)
                    this.setState({player:2});
                }
                else if(this.state.player==2){
                    cells[i].style.backgroundColor="green";
                    this.CALL(i)
                    this.setState({player:1});
                }
            });
        }
    }


}
export default Game;
