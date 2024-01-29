import React from 'react';
import '../Scores.css';

function Scores() {
  return (
    <div className='scores-container'>
      <div className='scores-box'>
        <span className='score-title'>Scores</span>
      </div>
      <div className='player-scores'>
        <div className='player-score'>
          <span>Player 1: 10</span>
        </div>
        <div className='player-score'>
          <span>Player 2: 15</span>
        </div>
      </div>
    </div>
  );
}

export default Scores;
