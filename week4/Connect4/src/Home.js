import React from "react";
export default function Home() {
    return(
      <div>
      <h2>Home</h2>
      <p>
      Connect four is a vertical game of tic-tac-toe, but with a twist-you have to get four in a row. The first player to get four checkers lined up in a row in any direction-horizontal, vertical, or diagonal-wins the game.<br/><br/>
      The standard game size for a Connect 4 game is a 6x7 grid consisting of 42 cells. Each player takes turns dropping a token into a column — which drops to the lowest available slot. Once settled, the players check to see if their newly placed piece. in combination with any existing pieces of their same color. make a straight light of four tokens. If four tokens are connected in a horizontal/vertical/diagonal line, that player wins.
      </p>
      </div>
    );
}
// export default Home;