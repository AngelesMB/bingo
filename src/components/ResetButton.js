import "../styles/PlayButton.scss";

const PlayButton = ({ resetGame, gameOver }) => {
  const handleReset = () => {
    return resetGame();
  };
  return (
    <button
      className={`button ${gameOver ? null : "hidden"}`}
      onClick={handleReset}
    >
      Start over
    </button>
  );
};
export default PlayButton;
