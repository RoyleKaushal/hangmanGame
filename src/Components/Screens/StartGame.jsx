import { useLocation } from "react-router-dom";

function StartGame() {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return <h1>Start your game {data} here</h1>;
}

export default StartGame;
