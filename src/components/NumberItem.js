import "../styles/NumberItem.scss";

const NumberItem = ({ number, matches }) => {
  // const matchesIncludesNumber = () => {
  //   console.log("matches",matches)
  //   // if (matches.length !== 0) {
  //   //   return matches.includes(number)
  //   // } else{
  //   //   return false
  //   // }
  // };
  return (
    <li className={`number ${number % 2 === 0 ? "called" : null}`}>{number}</li>
  );
};
export default NumberItem;
