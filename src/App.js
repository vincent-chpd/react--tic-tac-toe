import Square from "../src/components/Square";
import Reset from "../src/components/Reset";
import { useState } from "react";


export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    if (squares[i] !== null || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const handleResetClick = () => {
    setXIsNext(true);
    setSquares(Array(9).fill(null));
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status  = winner;
    status = `Winner is ${status}!`
    Swal.fire({
      title: `Winner is: ${winner}`,
      text: "Congratulations!",
      imageUrl: "https://plus.unsplash.com/premium_photo-1683749809341-23a70a91b195?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lubmVyfGVufDB8fDB8fHww",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
  }
else {
    status = "Next player: " + (xIsNext ? "X" : "O")
  }

  return (
    <div  className="game">
      <h1 className="jersey-10-regular" >TIC TAC TOE</h1>
      <div className="status jersey-10-regular"><h2>{status}</h2></div>
      <div class="board">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <Reset onResetClick={handleResetClick}/>
    </div>
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
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
