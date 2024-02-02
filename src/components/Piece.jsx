// import React, { useState } from 'react';
// import { useDrag } from 'react-dnd';
// import { ItemTypes } from './ItemTypes';
// import '../Piece.css';

// function Piece({ color, position, onPieceMove }) {
//   const [isDragging, setIsDragging] = useState(false);

//   const [, drag] = useDrag({
//     type: ItemTypes.PIECE,
//     item: { color, position },
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   });

//   const handleMouseDown = () => {
//     setIsDragging(true);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleClick = () => {
//     if (isDragging) {
//       onPieceMove(position, color);
//     }
//   };

//   const pieceStyle = {
//     backgroundColor: color,
//     width: '80%',
//     height: '80%',
//     borderRadius: '50%',
//     margin: '10%',
//     boxShadow: '5px 10px 10px rgba(0, 0, 0, 0.5)',
//     opacity: isDragging ? 0.5 : 1,
//     cursor: 'move',
//   };

//   return (
//     <div
//       ref={drag}
//       className="piece"
//       style={pieceStyle}
//       onMouseDown={handleMouseDown}
//       onMouseUp={handleMouseUp}
//       onClick={handleClick}
//     ></div>
//   );
// }

// export default Piece;



// // // function ChessGame() {
// // //   const [boardState, setBoardState] = useState(/* Initial board state */);

// // //   const handlePieceMove = (position, color) => {
// // //     // Logic to handle the piece move and update the board state
// // //     // This function should communicate with the backend to validate the move
// // //     // and update the board state accordingly
// // //   };

// // //   return (
// // //     <DndProvider backend={HTML5Backend}>
// // //       <div>
// // //         <h1>Chess Game</h1>
// // //         <Board boardState={boardState} />
// // //       </div>
// // //     </DndProvider>
// // //   );
// // // }

// // // export default ChessGame;

// // import React, { useState, } from 'react';
// // import { DndProvider } from 'react-dnd';
// // import HTML5Backend from 'react-dnd-html5-backend';
// // import Board from './Board';  // Import your Board component
// // import '../Piece.css';

// // function Piece() {
// //   const [boardState, setBoardState] = useState(/* Initial board state */);

// //   const handlePieceMove = async (position, color) => {
// //     try {
// //       // Make a fetch request to the backend to update the move
// //       const response = await fetch(`/games/${gameId}/move`, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           move: {
// //             from: position.from,
// //             to: position.to,
// //           },
// //         }),
// //       });

// //       if (response.ok) {
// //         const data = await response.json();
// //         setBoardState(data.updated_board);
// //         // Handle any other logic after a successful move
// //       } else {
// //         // Handle errors or show a message to the user
// //         console.error('Move failed:', response.statusText);
// //       }
// //     } catch (error) {
// //       console.error('Error:', error.message);
// //     }
// //   };

// //   return (
// //     <DndProvider backend={HTML5Backend}>
// //       <div>
// //         <h1>Chess Game</h1>
// //         <Board boardState={boardState} onPieceMove={handlePieceMove} />
// //       </div>
// //     </DndProvider>
// //   );
// // }

// // export default Piece;



// // import React, { useState } from 'react';
// // import { DndProvider } from 'react-dnd';
// // import HTML5Backend from 'react-dnd-html5-backend';
// // import { useParams } from 'react-router-dom'; // Import useParams
// // import Board from './Board';
// // import '../Piece.css';

// // function Piece() {
// //   const { gameId } = useParams(); // Extract gameId from URL parameters
// //   const [boardState, setBoardState] = useState(/* Initial board state */);

// //   const handlePieceMove = async (position, color) => {
// //     try {
// //       // Make a fetch request to the backend to update the move
// //       const response = await fetch(`/games/${gameId}/move`, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           move: {
// //             from: position.from,
// //             to: position.to,
// //           },
// //         }),
// //       });

// //       if (response.ok) {
// //         const data = await response.json();
// //         setBoardState(data.updated_board);
// //         // Handle any other logic after a successful move
// //       } else {
// //         // Handle errors or show a message to the user
// //         console.error('Move failed:', response.statusText);
// //       }
// //     } catch (error) {
// //       console.error('Error:', error.message);
// //     }
// //   };

// //   return (
// //     <DndProvider backend={HTML5Backend}>
// //       <div>
// //         <h1>Chess Game</h1>
// //         <Board boardState={boardState} onPieceMove={handlePieceMove} />
// //       </div>
// //     </DndProvider>
// //   );
// // }

// // export default Piece;
