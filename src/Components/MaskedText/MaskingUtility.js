export function getAllCharacters(originalWord, guessedLetters) {
  let originalWordArr = originalWord?.toUpperCase()?.split("");
  guessedLetters = guessedLetters?.map((letter) => letter?.toUpperCase());
  const guessedLettersSet = new Set(guessedLetters);

  const maskedArr = originalWordArr?.map((letter) => {
    if (guessedLettersSet.has(letter)) {
      return letter;
    } else return "_";
  });
  return maskedArr;
}
