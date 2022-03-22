import "../styles/Main.scss";
import PlayedNumbers from "./PlayedNumbers";
import MyNumbers from "./MyNumbers";
import Result from "./Result";

const Main = ({ message, playedNumbers, myNumbers, matches }) => {
  return (
    <main>
      <Result message={message}></Result>
      <PlayedNumbers playedNumbers={playedNumbers}></PlayedNumbers>
      <MyNumbers myNumbers={myNumbers} matches={matches}></MyNumbers>
    </main>
  );
};
export default Main;
