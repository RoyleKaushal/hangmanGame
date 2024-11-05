const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
function LetterButtons({ originalWord, guessedLetter, onLetterClick, steps, showWin }) {
  const originalWordSet = new Set(originalWord.toUpperCase().split(""));
  const guessedLetterSet = new Set(guessedLetter);

  function buttonStyle(letter) {
    if (guessedLetterSet.has(letter)) {
      return `${originalWordSet.has(letter) ? "bg-green-500" : "bg-red-500"}`;
    } else return `bg-blue-500`;
  }

  const buttons = ALPHABETS.map((letter, index) => {
    return (
      <button
        key={`button-${letter}`}
        value={letter}
        onClick={onLetterClick}
        disabled={guessedLetterSet.has(letter) || steps === 8 || showWin}
        className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
      >
        {letter}
      </button>
    );
  });

  return buttons;
}

export default LetterButtons;
