import NumberItem from "./NumberItem";

const MyNumbers = ({ myNumbers }) => {
  const myNumbersHtml = myNumbers.map((eachNumber) => {
    return <NumberItem number={eachNumber}></NumberItem>;
  });
  return (
    <div>
      Mi cartón
      {myNumbersHtml}
    </div>
  );
};
export default MyNumbers;
