import "../styles/NumberItem.scss";

const NumberItem = ({ number, matches }) => {
  return (
    <li className={`number ${matches.includes(number) ? "called" : null}`}>
      {number}
    </li>
  );
};
export default NumberItem;
