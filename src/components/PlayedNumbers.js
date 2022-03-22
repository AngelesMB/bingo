import "../styles/PlayedNumbers.scss";
import CalledNumberItem from "./CalledNumberItem";

const PlayedNumbers = ({ playedNumbers }) => {
  const playedNumbersHtml = playedNumbers.map((eachNumber, index) => {
    return (
      <CalledNumberItem number={eachNumber} key={index}></CalledNumberItem>
    );
  });
  return (
    <div className="list__container">
      <h3 className="list__title">Called numbers</h3>
      <ul className="list__numbers">{playedNumbersHtml}</ul>
    </div>
  );
};
export default PlayedNumbers;
