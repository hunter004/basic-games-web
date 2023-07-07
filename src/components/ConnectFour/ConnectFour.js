import {React,useState} from 'react';

const styles = {
    home: {
        position: 'absolute',
        top:63,
        left: 0, right:0,
        textAlign: 'center',
        backgroundColor: '#050505',
        color: '#14d0e0',
    },
    square: {
        background: '#fff',
        border: '5px solid #14d0e0',
        float: 'left',
        height: '100px',
        padding: 0,
        width: '100px',
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

function Board({tealIsNext, squares, onPlay}){
    function columnSet(c){
        for(let i = c; i<c+6; i++){
            if(!squares[i])
                return i;
        }
        return c;
    }
    function handleClick(i) {
        let colValue = columnSet(i);
        if(squares[colValue]) return;
        const nextSquares = squares.slice();
        if(tealIsNext) nextSquares[colValue] = 'X';
        else nextSquares[colValue] = 'O';
        onPlay(nextSquares);
    }
    const winner = calculateWinner(squares);
    let status;
    if(winner) {
        status = 'Winner: ' + winner;
    }
    else {
        status = 'Next player: ' + (tealIsNext ? 'X' : 'O');
    }

    return (
        <>
        <div style={styles.status}>{status}</div>
        <div style={styles.row}>
        <Square value={squares[5]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[11]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[17]} onSquareClick={() => handleClick(12)} />
        <Square value={squares[23]} onSquareClick={() => handleClick(18)} />
        <Square value={squares[29]} onSquareClick={() => handleClick(24)} />
        <Square value={squares[35]} onSquareClick={() => handleClick(30)} />
        </div>
        <div style={styles.row}>
        <Square value={squares[4]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[10]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[16]} onSquareClick={() => handleClick(12)} />
        <Square value={squares[22]} onSquareClick={() => handleClick(18)} />
        <Square value={squares[28]} onSquareClick={() => handleClick(24)} />
        <Square value={squares[34]} onSquareClick={() => handleClick(30)} />
        </div>
        <div style={styles.row}>
        <Square value={squares[3]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[9]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[15]} onSquareClick={() => handleClick(12)} />
        <Square value={squares[21]} onSquareClick={() => handleClick(18)} />
        <Square value={squares[27]} onSquareClick={() => handleClick(24)} />
        <Square value={squares[33]} onSquareClick={() => handleClick(30)} />
        </div>
        <div style={styles.row}>
        <Square value={squares[2]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[14]} onSquareClick={() => handleClick(12)} />
        <Square value={squares[20]} onSquareClick={() => handleClick(18)} />
        <Square value={squares[26]} onSquareClick={() => handleClick(24)} />
        <Square value={squares[32]} onSquareClick={() => handleClick(30)} />
        </div>
        <div style={styles.row}>
        <Square value={squares[1]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[13]} onSquareClick={() => handleClick(12)} />
        <Square value={squares[19]} onSquareClick={() => handleClick(18)} />
        <Square value={squares[25]} onSquareClick={() => handleClick(24)} />
        <Square value={squares[31]} onSquareClick={() => handleClick(30)} />
        </div>
        <div style={styles.row}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[12]} onSquareClick={() => handleClick(12)} />
        <Square value={squares[18]} onSquareClick={() => handleClick(18)} />
        <Square value={squares[24]} onSquareClick={() => handleClick(24)} />
        <Square value={squares[30]} onSquareClick={() => handleClick(30)} />
        </div>
    </>
    )
}

function calculateWinner(squares){
    const lines  = [
        [0,6,12,18],[6,12,18,24],[12,18,24,30],
        [1,7,13,19],[7,13,19,25],[13,19,25,31],
        [2,8,14,20],[8,14,20,26],[14,20,26,32],
        [3,9,15,21],[9,15,21,27],[15,21,27,33],
        [4,10,16,22],[10,16,22,28],[16,22,28,34],
        [5,11,17,23],[11,17,23,29],[17,23,29,35],
        [0,1,2,3],[1,2,3,4],[2,3,4,5],
        [6,7,8,9],[7,8,9,10],[8,9,10,11],
        [12,13,14,15],[13,14,15,16],[14,15,16,17],
        [18,19,20,21],[19,20,21,22],[20,21,22,23],
        [24,25,26,27],[25,26,27,28],[26,27,28,29],
        [30,31,32,33],[31,32,33,34],[35,36,37,38],
        [2,9,16,23],[1,8,15,22],[8,15,22,29],
        [0,7,14,21],[7,14,21,28],[14,21,28,35],
        [6,13,20,27],[13,20,27,34],[12,19,26,33]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a,b,c,d] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]){
            return squares[a];
        }
    }
    return null;
}

export default function ConnectFour(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const tealIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1) , nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }
    return (
        <div style={styles.home}>
            <div>
                <Board tealIsNext={tealIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div style={styles.standard}>
                <button style={styles.button} onClick={() => setCurrentMove(0)}>New Game</button>
            </div>
        </div>
    )
}