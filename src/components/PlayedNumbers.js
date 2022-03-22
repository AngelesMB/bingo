import "../styles/PlayedNumbers.scss";
import NumberItem from "./NumberItem";

const PlayedNumbers = ({ playedNumbers }) => {
  const playedNumbersHtml = playedNumbers.map((eachNumber, index) => {
    return <NumberItem number={eachNumber} key={index}></NumberItem>;
  });
  return (
    <div className="list__container">
      <h3 className="list__title">Called numbers</h3>
      <ul className="list__numbers">{playedNumbersHtml}</ul>
    </div>
  );
};
export default PlayedNumbers;
