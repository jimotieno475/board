import React from "react";
// import { useEffect, useState } from 'react';
import Board from "./components/Board";
import Scores from "./components/Scores";


function Home({userid}) {
  
  return (
    <div>
      <Scores/>
      <Board />
    </div>
  );
}

export default Home;
