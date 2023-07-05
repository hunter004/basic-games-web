import {React, useState} from 'react';

const styles = {
    home: {
        position: 'absolute',
        top:63,
        bottom: 0, left: 0, right:0,
        textAlign: 'center',
        backgroundColor: '#050505',
        color: '#14d0e0',
    },
    square: {
        background: '#fff',
        border: '5px solid #14d0e0',
        float: 'left',
        height: '150px',
        padding: 0,
        width: '150px',
        fontSize: '50px',
        color: '#14d0e0'
    },
    row: {
        clear: 'both',
        content: '',
        display: 'table',
        textAlign: 'center',
        position: 'relative',
        margin: '0 auto'
    },
    status: {
        color: '#14d0e0',
        textAlign: 'center',
        height: '100px',
        fontSize: '50px'
    },
    button: {
        color: '#14d0e0',
        height: '75px',
        width: '200px',
        fontSize: '20px',
    },
    standard: {
        paddingTop: '20px'
    }
};

function Square({value, onSquareClick}) {
    return (
        <button style={styles.square} onClick={onSquareClick}>
            {value}
        </button>
    )
}

function Board({xIsNext, squares, onPlay}) {
    function handleClick(i) {
        if(calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext) {
            nextSquares[i] = 'X';
        }
        else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }
    const winner = calculateWinner(squares);
    let status;
    if(winner) {
        status = 'Winner: ' + winner;
    }
    else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div style={styles.status}>{status}</div>
            <div style={styles.row}>
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div style={styles.row}>
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div style={styles.row}>
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
        );
}

    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }

export default function TicTacToe() {   
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

      return (
        <div style={styles.home}>
          <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
          <div style={styles.standard}>
            <button style={styles.button} onClick={() => jumpTo(0)}>New Game</button>
          </div>
        </div>
      );
    }
    
