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
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState(
    "Waiting for you to click the button!"
  );
  const [counter, setCounter] = useState(4);
  const [matches, setMatches] = useState([])

  // const possibleNumbers = [];

  // const getPossibleNumbers = () => {
  //   for (let i = 0; i <= 100; i++) {
  //     possibleNumbers.push(i);
  //   }
  //   return possibleNumbers;
  // };
  // getPossibleNumbers();

  // setMessage("Time to yell Bingo!")

  const getPlayedNumber = () => {
    if (counter > 0) {
      const randomNumber = Math.floor(Math.random() * 101);
      // const calledNumber = possibleNumbers.splice(randomNumber, 1);
      if (playedNumbers.indexOf(randomNumber) === -1) {
        setPlayedNumbers([...playedNumbers, randomNumber]);
        setCounter(counter - 1);
        setMessage(`${counter} balls left`);
        if (myNumbers.includes(randomNumber)) {
          setMatches(...matches, randomNumber);
        }
      }
    } else {
      setGameOver(true);
      setMessage("Game over! You ran out of numbers");
    }
  };

  const resetGame = () => {
    setCounter(4);
    setGameOver(false);
    setMessage("Waiting for you to click the button!");
    setPlayedNumbers([]);
    setMyNumbers(getRandomNumbers());
  };

  return (
    <div>
      <Header
        getPlayedNumber={getPlayedNumber}
        resetGame={resetGame}
        gameOver={gameOver}
      ></Header>
      <Main
        message={message}
        myNumbers={myNumbers}
        playedNumbers={playedNumbers}
        matches={matches}
      ></Main>
    </div>
  );
}

export default App;
