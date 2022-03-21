import "../styles/PlayButton.scss";

const PlayButton = ({ getPlayedNumber }) => {
  const handlePlayClick = () => {
    return getPlayedNumber();
  };
  return (
    <div className="button" onClick={handlePlayClick}>
      Call a number
    </div>
  );
};
export default PlayButton;
