import "../styles/Header.scss";
import PlayButton from "./PlayButton";
import ResetButton from "./ResetButton";

const Header = ({ getPlayedNumber, gameOver, resetGame }) => {
  return (
    <header className="header">
      <h1>Let's play bingo!</h1>
      <PlayButton
        getPlayedNumber={getPlayedNumber}
        gameOver={gameOver}
      ></PlayButton>
      <ResetButton resetGame={resetGame} gameOver={gameOver}></ResetButton>
    </header>
  );
};
export default Header;
