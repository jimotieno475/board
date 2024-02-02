
import { useContext} from 'react';
import Board from "./components/Board";
import Scores from "./components/Scores";
import { APPCONTEXT } from "./components/APPContext";

function Home({userid}) {
  const { userId } = useContext(APPCONTEXT);
  return (
    <div>
      <Scores/>
      <Board userId/>
    </div>
  );
}

export default Home;
