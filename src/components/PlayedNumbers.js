import NumberItem from "./NumberItem";

const PlayedNumbers = ({ playedNumbers }) => {
  const playedNumbersHtml = playedNumbers.map((eachNumber) => {
    return <NumberItem number={eachNumber}></NumberItem>;
  });
  return (
    <div>
      Bolitas
      {playedNumbersHtml}
    </div>
  );
};
export default PlayedNumbers;
