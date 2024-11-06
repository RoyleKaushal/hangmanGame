import MaskedText from "../MaskedText/MaskedText";
import LetterButtons from "../LetterButtons/LetterButtons";
import HangMan from "../HangMan/HangMan";
import LoseComponent from "../LoseComponent/LoseComponent";
import WinComponent from "../WinComponent/WinComponent";
import Button from "../ButtonComponent/Button";

function StartGameContainer({
  originalWord,
  guessedLetter,
  handleClick,
  steps,
  onPressRetry,
  correctGuess,
  hint,
  onQuitPress
}) {
  let originalWordArr = originalWord?.toUpperCase()?.split("");
  const originalWordArrSet = new Set(originalWordArr);

  let showWin = originalWordArrSet.size === correctGuess;
  return (
    <>
      <h1>Start your game here</h1>
      {steps>4 && <h1>Hint: {hint}</h1>}
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
      <div className="flex flex-col items-center self-center m-2">
        <Button
          type="submit"
          styleType="error"
          text={"Quit"}
          onPressHandler={onQuitPress}
        />
      </div>
    </>
  );
}

export default StartGameContainer;
