import React, { useState, useContext } from 'react';
import '../Board.css';
import { APPCONTEXT } from './APPContext';
import useaxios from './useaxios';

function Cell({ isDark, rowIndex, colIndex, board, setBoard, piece }) {
  const [validMoves, setValidMoves] = useState([]);
  const [from, setFrom] = useState();
  const request = useaxios();
  const { userId } = useContext(APPCONTEXT);

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
        const res = await request({
          url: 'board/move',
          method: 'PUT',
          data: {
            from: from,
            to: {
              x: colIndex,
              y: rowIndex,
            },
          },
        });

        setBoard(res?.board || board);
        setValidMoves([]);
      }
    } catch (error) {
      console.error('Error moving piece:', error);
    }

    try {
      const res = await request({
        url: 'board/valid-moves',
        method: 'POST',
        data: {
          id: userId,
          from: {
            x: colIndex,
            y: rowIndex,
          },
        },
      });

      if (res === 'error') {
        console.error('Error fetching valid moves');
        return;
      }

      setValidMoves(res?.valid_moves || []);
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

