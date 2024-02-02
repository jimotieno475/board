import React, { useState } from 'react';
import '../Board.css';
// import { APPCONTEXT } from './APPContext';

function Cell({ isDark, rowIndex, colIndex, board, setBoard, piece ,userId }) {
  const [validMoves, setValidMoves] = useState([]);
  const [from, setFrom] = useState();
  // const { userId } = useContext(APPCONTEXT);

  const cellStyle = {
    backgroundColor: isDark ? '#8B4513' : '#FFE4B5',
    padding: '5px',
    cursor: 'pointer',
  };

  const pieceClick = async () => {
    if (piece === 'X') {
      console.log({
        from: from,
        to: {
          x: colIndex,
          y: rowIndex,
        },
        id: userId,
      });
      return;
    }

    try {
      if (piece !== 'X') {
        const res = await fetch('/board/move', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: from,
            to: {
              x: colIndex,
              y: rowIndex,
            },
          }),
        });

        const data = await res.json();
        setBoard(data?.board || board);
        setValidMoves([]);
      }
    } catch (error) {
      console.error('Error moving piece:', error);
    }

    try {
      const res = await fetch('/valid-moves', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: userId,
          from: {
            x: colIndex,
            y: rowIndex,
          },
        }),
      });

      const data = await res.json();
      if (data === 'error') {
        console.error('Error fetching valid moves');
        return;
      }

      setValidMoves(data?.valid_moves || []);
    } catch (error) {
      console.error('Error fetching valid moves:', error);
    }
  };

  console.log(validMoves);

  return (
    <div onClick={() => pieceClick()} className={`cell ${isDark ? 'dark' : ''}`} style={{ ...cellStyle, position: 'relative' }}>
      <SinglePiece piece={piece} />
    </div>
  );
}

function SinglePiece({ piece }) {
  const roundedStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%'
  };

  if (piece === "B") {
    return <div style={{ ...roundedStyle, backgroundColor: 'black' }}> </div>;
  }

  if (piece === "W") {
    return <div style={{ ...roundedStyle, backgroundColor: 'white' }}> </div>;
  }

  if (piece === "KB" || piece === "KW") {
    return (
      <div style={{ ...roundedStyle, backgroundColor: 'red', position: 'relative' }}>
        <div style={{ position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ ...roundedStyle, borderWidth: "3px", width: "50px", height: "50px", borderColor: 'red', borderStyle: "solid" }}></div>
        </div>
      </div>
    );
  }

  if (piece === "x") {
    return <div style={{ ...roundedStyle, backgroundColor: "green", opacity: 0.5, position: "relative" }}></div>;
  }
}

export default Cell;

