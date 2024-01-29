// Board.js
import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Piece from "./Piece";

function Board() {

  useEffect(()=> {
    fetch('/start_game', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({board})
    }).then(res => res.json()).then((data) => {
      console.log(data)

    })
  }, [])
  
  const [board, setBoard] = useState(Array(8).fill(null).map(() => Array(8).fill(null)))

  const handlePieceDrop = (color, rowIndex, colIndex) => {
    // Handle the drop event logic here, e.g., updating the position of the piece.
    console.log(
      `Piece dropped at row ${rowIndex}, column ${colIndex} with color ${color}`
    );

    setBoard(prevBoard => {
      // Create a deep copy of the board
      const newBoard = prevBoard.map(row => [...row]);

      // Update the cell with the new color
      newBoard[rowIndex][colIndex] = color;

      // Return the updated board
      return newBoard;
    });

  };

  console.log(board)

  const sendBoardToBackend = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5555/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ board }),
      });
  
      // Check if the response status is not in the range 200-299
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Unknown error occurred');
      }
  
      const responseData = await response.json();
      console.log(`Success: ${responseData.message}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((piece, colIndex) => {
            const isDarkSquare = (rowIndex + colIndex) % 2 === 1;

            return (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                isDark={isDarkSquare}
                rowIndex={rowIndex}
                colIndex={colIndex}
                onPieceDrop={handlePieceDrop}
              >
                {piece && <Piece color={piece} />}
              </Cell>
            );
          })}
        </div>
      ))}
    </div>
  </DndProvider>
  );
}

export default Board;
