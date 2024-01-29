import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import Piece from './Piece';
import '../Board.css';

function Cell({ isDark, rowIndex, colIndex, onPieceDrop, boardState, updateBoardState }) {
  const cellStyle = {
    backgroundColor: isDark ? '#8B4513' : '#FFE4B5',
  };

  const isWhitePieceVisible = isDark && rowIndex >= 0 && rowIndex < 3 && colIndex < 12;
  const isBlackPieceVisible = isDark && rowIndex >= 5 && rowIndex < 16 && colIndex < 12;

  const [, drop] = useDrop({
    accept: ItemTypes.PIECE,
    drop: (item) => onPieceDrop(item.color, rowIndex, colIndex),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`cell ${isDark ? 'dark' : ''}`} style={cellStyle} >
      {isBlackPieceVisible && <Piece color="black" position={{ row: rowIndex, col: colIndex }} />}
      {isWhitePieceVisible && <Piece color="white" position={{ row: rowIndex, col: colIndex }} />}
    </div>
  );
}

export default Cell;







