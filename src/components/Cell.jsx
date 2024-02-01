import React, {useState} from 'react';
import '../Board.css';

function Cell({ isDark, rowIndex, colIndex, board, setBoard, piece}) {
  const[validMoves, setvalidMoves] = useState([])

const cellStyle = {
    backgroundColor: isDark ? 
    '#8B4513' : '#FFE4B5',
    padding:"5px",
    cursor:"pointer"
  };

  const pieceClick=()=>{
    if(validMoves.length===0){
      return
    }
  }
  
  
  return (
    <div  onClick={pieceClick} className={`cell ${isDark ? 'dark' : ''}`} style={{...cellStyle, position:"relative"}} >
      <SinglePiece piece={piece}/>
    </div>
  );
}

export default Cell;







