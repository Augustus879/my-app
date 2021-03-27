import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {

    // 4. add constructor function
    constructor(props) {
        super(props);
        this.state = {
            value:null
        }
    }
    render() {
      return (
        // 3. add onClick 
        // 5. modify function in onClick to set state
        
        <button 
            className="square" 
            
            onClick={() => this.setState({value: 'X'})}>
        {/* step 2 */}
          {this.state.value}   
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    
    // 6. create array to share number between square
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        }
    }
    // 7. handleClick
    renderSquare(i) {
      return (
      <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
      ); // step 1; step 6
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  