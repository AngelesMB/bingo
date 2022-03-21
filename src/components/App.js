import "../styles/App.scss";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";

function App() {
  const getRandomNumbers = () => {
    const randomNumbers = [];
    while (randomNumbers.length < 12) {
      const randomNumber = Math.floor(Math.random() * 101);
      if (randomNumbers.indexOf(randomNumber) === -1) {
        randomNumbers.push(randomNumber);
      }
    }
    return randomNumbers;
  };

  const [myNumbers, setMyNumbers] = useState(getRandomNumbers());
  const [playedNumbers, setPlayedNumbers] = useState([]);
  // const firstRow = [];

  const getPlayedNumber = () => {
    console.log("entra")
    if (playedNumbers.length < 24) {
      const randomNumber = Math.floor(Math.random() * 101);
      if (playedNumbers.indexOf(randomNumber) === -1) {
        setPlayedNumbers([...playedNumbers, randomNumber]);
      }
    } else {
      console.log("numero maximo de jugadas")
    }
  };

  return (
    <div>
      <Header getPlayedNumber={getPlayedNumber}></Header>
      <Main myNumbers={myNumbers} playedNumbers={playedNumbers}></Main>
    </div>
  );
}

export default App;
