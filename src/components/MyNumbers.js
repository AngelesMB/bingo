import NumberItem from "./NumberItem";

const MyNumbers = ({ myNumbers, matches }) => {
  const myNumbersHtml = myNumbers.map((eachNumber, index) => {
    return (
      <NumberItem
        matches={matches}
        number={eachNumber}
        key={index}
      ></NumberItem>
    );
  });
  return (
    <div className="list__container">
      <h3 className="list__title">Scorecard</h3>
      <ul className="list__numbers">{myNumbersHtml}</ul>
    </div>
  );
};
export default MyNumbers;
