import React from "react";
// import { useEffect, useState } from 'react';
import Board from "./components/Board";
import Scores from "./components/Scores";

function Home() {
  // const [info, setInfo] = useState({})

  // useEffect(() => {
  //     fetch('http://127.0.0.1:5555')
  //     .then(res => res.json())
  //     .then(data => {
  //     setInfo(data)
  // })
  // }, [])

  // console.log(typeof(info))
  // console.log(info.name)

  return (
    <div>
      {/* <p>The data is: {info.name}</p> */}
      {/* <p>Hello web developer!</p>
      <p>This is another branch after developer branch for testing the board pieces!</p> */}

      {/* {renderCell()} */}
      <Scores/>
      <Board />
    </div>
  );
}

export default Home;
