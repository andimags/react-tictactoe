import { useState } from "react";
import Square from "./components/Square";

function Main() {
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClickSquare = (index) => {
        const newSquares = squares.slice();
        newSquares[index] = squares[index] ?? currentPlayer;
        setCurrentPlayer(currentPlayer == "X" ? "O" : "X");
        setSquares(newSquares);
    };

    return (
        <>
            <div className="flex h-screen bg-slate-900">
                <div className="m-auto w-1/3">
                    <h2 className="text-center text-2xl text-slate-200">
                        Current player: {currentPlayer}
                    </h2>
                    <div className="grid grid-cols-3 gap-x-2 gap-y-2 bg-slate-400 p-4">
                        {squares.map((square, index) => (
                            <Square
                                key={index}
                                value={square}
                                onClick={() => handleClickSquare(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
