// Board.js
import React, { useState, useEffect, useContext } from "react";
import Cell from "./Cell";
// import Piece from "./Piece";
import "../Board.css"
import { APPCONTEXT } from "./APPContext";
import { useNavigate } from "react-router-dom";

function Board() {
  const { userId } = useContext(APPCONTEXT);
  const navigate = useNavigate();

  const [board, setBoard] = useState(Array.from({ length: 8 }, () => Array(8).fill(" ")));

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    // if (!userId) {
    //   navigate("/login");
    //   return;
    // }
    
    try {
      const response = await fetch(`board/8`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log((data))
      setBoard(data);
    } catch (error) {
      console.error('Error fetching board:', error);
    }
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((piece, colIndex) => {
            const isDarkSquare = (rowIndex + colIndex) % 2 === 1;
            return (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                isDark={isDarkSquare}
                rowIndex={rowIndex}
                colIndex={colIndex}
                setBoard={setBoard}
                board={board}
                onPieceDrop={() => {}}
                piece={board[rowIndex][colIndex]}
              >
                {/* {piece && <Piece color={piece} />} */}
              </Cell>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Board;

