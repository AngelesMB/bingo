import "../styles/Main.scss";
import PlayedNumbers from "./PlayedNumbers";
import MyNumbers from "./MyNumbers";
import Result from "./Result";

const Main = ({playedNumbers, myNumbers}) => {
  return (
    <main>
      <PlayedNumbers playedNumbers={playedNumbers}></PlayedNumbers>
      <MyNumbers myNumbers={myNumbers}></MyNumbers>
      <Result></Result>
    </main>
  );
};
export default Main;
