import { useLocation, useParams, useSearchParams } from "react-router-dom";
import MaskedText from "../MaskedText/MaskedText";
import LetterButtons from "../LetterButtons/LetterButtons";
import { useState } from "react";

function StartGame() {
  // By using Props
  const location = useLocation();
  const originalWord = location.state;
  const [guessedLetter,setGuessedLetter] = useState([]);

  const handleClick = (e) => {
    setGuessedLetter(it=>[...it, e.target.value]);
  }

  // By using Query Params
  // const [searchParams] = useSearchParams();
  // const originalWord = searchParams?.get('text');

  // By using Path Params
  // const {text} = useParams();

  return (
    <>
      <h1>Start your game here</h1>
      <div>
        <MaskedText originalWord={originalWord} guessedArray={guessedLetter}/>
      </div>
      <div>
        <LetterButtons originalWord={originalWord} guessedLetter={guessedLetter} onLetterClick={handleClick} />
      </div>
    </>
  );
}

export default StartGame;
