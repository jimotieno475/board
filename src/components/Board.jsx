// Board.js
import React, { useState, useEffect,useContext } from "react";
import Cell from "./Cell";
import Piece from "./Piece";
import useaxios from "./useaxios";
import { APPCONTEXT } from "./APPContext";

import { useNavigate } from "react-router-dom";

function Board() {
  const { userId } = useContext(APPCONTEXT);
  const request = useaxios();
  const navigate = useNavigate();
  
  const [board, setBoard] = useState([
    [" ", "w", " ", "W", " ", "W", " ", "W"],
    ["W", " ", "W", " ", "W", " ", "W", " "],
    [" ", "W", " ", "W", " ", "W", " ", "W"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", "", " ", " ", " ", " "],
    ["B", " ", "B", " ", "B", " ", "B", " "],
    [" ", "B", " ", "B", " ", "B", " ", "B"],
    ["B", " ", "B", " ", "B", " ", "B", " "],
  ]);
  useEffect(() => {
    init();
  },);

  const init = async () => {
    // if (!userId) {
    //   navigate("/login");
    //   return;
    // }
    let res = await request({
      url: `board/1`,
      method: "GET",
      
    });
    if (res === "error") {
      return;
    }
    setBoard(res.JSON);
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
                {piece && <Piece color={piece} />}
              </Cell>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Board;
