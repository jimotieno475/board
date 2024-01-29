import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import '../Piece.css';

function Piece({ color, position, onPieceMove }) {
  const [isDragging, setIsDragging] = useState(false);

  const [, drag] = useDrag({
    type: ItemTypes.PIECE,
    item: { color, position },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    if (isDragging) {
      onPieceMove(position, color);
    }
  };

  const pieceStyle = {
    backgroundColor: color,
    width: '80%',
    height: '80%',
    borderRadius: '50%',
    margin: '10%',
    boxShadow: '5px 10px 10px rgba(0, 0, 0, 0.5)',
    opacity: isDragging ? 0.5 : 1,
    cursor: 'move',
  };

  return (
    <div
      ref={drag}
      className="piece"
      style={pieceStyle}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
    ></div>
  );
}

export default Piece;