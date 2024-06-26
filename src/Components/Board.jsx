import SquareCon from "./SquareCon";
import "./Board.css";
import { useState } from "react";
import { calculationWinner } from "../Utils/Index";

function Board(){
const [square, setSquare] = useState(Array(9).fill(null));
const [isXNext, setIsXNext] = useState(true);

const handleClick = (index) => {
    const squareCopy = square.slice();
    if(calculationWinner(squareCopy) || squareCopy[index]){
        return;
}
    squareCopy[index] = isXNext ? "X" : "O";
    setSquare(squareCopy);
    setIsXNext(!isXNext);
};

const renderSquare = (index) => {
    return <SquareCon value={square[index]} onClick={()=> handleClick(index)}/>
};

const winner = calculationWinner(square);
let status;
if (winner){
    status= `Winner: ${winner}`;
}  else{
   status = `Next Player: ${isXNext ? "X" : "0"}`;
}

const handleRestart = () => {
    setSquare(Array(9).fill(null));
};

    return (
        <div>
            <h2>Tic-Tac-Toe</h2>
            <div className="row">{status}</div>
            <div className="row">
            <button className="restart-btn" onClick={handleRestart}>
                Restart
            </button>
            </div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}               
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board;