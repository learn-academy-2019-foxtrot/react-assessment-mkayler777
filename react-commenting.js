// ASSESSMENT 4: REACT ASSESSMENT
// As a developer, you are tasked with commenting this code.
// There are 13 sections that need comments.
// Each section is marked with // Here: for JavaScript code and {/* Here: */} for JSX code.
// Comments will describe the code on the line below the comment marks.

import React, { Component } from 'react'
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        {/* 1) Child class is being used in this component and will display the board here. */}
        <Board />
      </div>
    )
  }
}

class Board extends Component{
  constructor(){
    super()
    // 2) Constructor to set state of each new board. The gameBoard is an array of 9 null values, with the current player a unicorn, and no winner yet.
    this.state = {
      gameBoard: Array(9).fill(null),
      currentPlayer: "🦄",
      winner: null,
    }
  }

  gamePlay = (index) => {
    // 3) Destructuring values from state
    const { gameBoard, currentPlayer, winner } = this.state
    // 4) If square is open and no winner, assign current player to index position. Update state with new gameboard, change player and increment turn.
    if(gameBoard[index] === null && winner === null){
      gameBoard[index] = currentPlayer
      this.setState({
        gameBoard: gameBoard,
        currentPlayer: currentPlayer === "🦄" ? "🦆" : "🦄",
          })
    }
    if(winner === null){
      // 5) Check to see if a win state is met.
      this.winning()
    }
  }

  winning = () => {
    const { currentPlayer, gameBoard } = this.state
    let winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    winningConditions.map(value => {
      const [a, b, c] = value
      if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
        // 6) If a, b, and c indexes of gameBoard match, set winner to current player.
        this.setState({
          winner: currentPlayer
        })
      }
    })
  }

  render(){
    const { gameBoard, currentPlayer, winner } = this.state
    // 7) Set our squares to a variable that will be rendered later.
    let mappedGameBoard = gameBoard.map((value, index) => {
      return(
        <Square
          value={ value }
          index={ index }
          key={ index }
          {/* 8) This is the function that we want to call on a click */}
          gamePlay={ this.gamePlay }
        />
      )
    })
    return(
      <div>
        <h1>Tic Tac Toe</h1>

          <div className="statusDiv">
            {/* 9) Destructured part of state, the current player */}
            The Current Player is: { currentPlayer }
          </div>

          <div className="statusDiv">
            {/* 10) Destructured state, if there is a winner, here they are */}
            The Winner is: { winner }
          </div>

          <div id="outcomeBoard">
            {/* 11) Display our array of squares */}
            { mappedGameBoard }
          </div>

      </div>
    )
  }
}

class Square extends Component{

  handleSquareClick = () => {
    // 12) Each Click passes squares index up to gamePlay to update board state and check for winner.
    this.props.gamePlay(this.props.index)
  }

  render(){
    return(
      <div id="square" onClick={ this.handleSquareClick }>
        {/* 13) Renders squares index of gameBoard in parent. */}
        { this.props.value }
      </div>
    )
  }
}

export default App
