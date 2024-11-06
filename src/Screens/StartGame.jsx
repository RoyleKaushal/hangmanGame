import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useState } from "react";
import StartGameContainer from "../Components/StartGameContainer/StartGameContainer";

function StartGame() {
  const navigate = useNavigate();

  // By using Props
  const location = useLocation();
  const originalWord = location.state.value;
  const hint = location.state.hint;
  const [guessedLetter, setGuessedLetter] = useState([]);
  const [steps, setSteps] = useState(1);
  const [correctGuess, setCorrectGuess] = useState(0);

  const handleClick = (e) => {
    if (!originalWord.toUpperCase().includes(e.target.value)) {
      setSteps(steps + 1);
    } else {
      setCorrectGuess(correctGuess + 1);
    }
    setGuessedLetter((it) => [...it, e.target.value]);
  };

  const onPressRetry = () => {
    navigate("/");
  };

  // By using Query Params
  // const [searchParams] = useSearchParams();
  // const originalWord = searchParams?.get('text');

  // By using Path Params
  // const {text} = useParams();

  return (
    (originalWord && hint) ?
    <StartGameContainer
      originalWord={originalWord}
      guessedLetter={guessedLetter}
      handleClick={handleClick}
      steps={steps}
      onPressRetry={onPressRetry}
      correctGuess={correctGuess}
      hint={hint}
      onQuitPress={onPressRetry}
    /> : <>
      <h1>Something went wrong</h1>
    </>
  );
}

export default StartGame;
