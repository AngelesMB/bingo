import "../styles/PlayButton.scss";

const PlayButton = ({ getPlayedNumber, gameOver }) => {
  const handlePlayClick = () => {
    return getPlayedNumber();
  };
  return (
    <button
      className={`button ${gameOver ? "hidden" : null}`}
      onClick={handlePlayClick}
    >
      Call a number
    </button>
  );
};
export default PlayButton;
