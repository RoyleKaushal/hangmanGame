import { getAllCharacters } from "./MaskingUtility";

function MaskedText ( {originalWord, guessedArray} ) {
    let wordArr = getAllCharacters(originalWord,guessedArray);


    return(
        <>
            {
                wordArr.map(( letter, index ) => <b key={index} >{letter} </b>
                )
            }
        </>
    )
}
export default MaskedText;