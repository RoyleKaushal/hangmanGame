import MaskedText from "../MaskedText/MaskedText";
import LetterButtons from "../LetterButtons/LetterButtons";
import HangMan from "../HangMan/HangMan";
import LoseComponent from "../LoseComponent/LoseComponent";
import WinComponent from "../WinComponent/WinComponent";

function StartGameContainer({
  originalWord,
  guessedLetter,
  handleClick,
  steps,
  onPressRetry,
  correctGuess,
}) {
  let originalWordArr = originalWord?.toUpperCase()?.split("");
  const originalWordArrSet = new Set(originalWordArr);

  let showWin = originalWordArrSet.size === correctGuess;
  return (
    <>
      <h1>Start your game here</h1>
      <div>
        <MaskedText originalWord={originalWord} guessedArray={guessedLetter} />
      </div>
      <div>
        <LetterButtons
          originalWord={originalWord}
          guessedLetter={guessedLetter}
          onLetterClick={handleClick}
          steps={steps}
          showWin={showWin}
        />
      </div>
      <div>
        <HangMan level={steps} />
      </div>
      <div>
        {steps === 8 && <LoseComponent handleClick={onPressRetry} />}
        {showWin && <WinComponent handleClick={onPressRetry} />}
      </div>
    </>
  );
}

export default StartGameContainer;
