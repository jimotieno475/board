// Board.js
import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import Piece from "./Piece";
import useaxios from "./useaxios";

import { useNavigate } from "react-router-dom";

function Board() {
  const [userid, setUserId] = useState(null);
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
  }, []);

  const init = async () => {
    if (!userid) {
      navigate("/login");
      return;
    }
    let res = await request({
      url: `board/${userid}`,
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
