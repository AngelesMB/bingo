import "../styles/App.css";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [myNumbers, setMyNumbers] = useState([1, 2, 3, 4]);
  const [playedNumbers, setPlayedNumbers] = useState([5, 6, 7, 8]);

  return (
    <div>
      <Header></Header>
      <Main myNumbers={myNumbers} playedNumbers={playedNumbers}></Main>
    </div>
  );
}

export default App;
