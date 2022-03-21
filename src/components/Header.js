import "../styles/Header.scss";
import PlayButton from "./PlayButton";

const Header = ({ getPlayedNumber }) => {
  return (
    <header className="header">
      <h1>Let's play bingo!</h1>
      <PlayButton getPlayedNumber={getPlayedNumber}></PlayButton>
    </header>
  );
};
export default Header;
