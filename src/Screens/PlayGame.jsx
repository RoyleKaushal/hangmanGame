import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Components/ButtonComponent/Button"

function PlayGame() {
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  async function fetchWord() {
    const response = await fetch("http://localhost:3000/words");
    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.length);
    setWord(data[randomIndex].wordValue);
    setHint(data[randomIndex].wordHint);
  }
  useEffect(() => {
    fetchWord();
  }, []);
  return (
    <>
        <Link to='/start' state={{value: word, hint: hint}}>
            <Button text='Single Player'/>
        </Link>
        <br/>
        <div className="mt-3">
        <Link to='/play'>
            <Button text='Multi Player' styleType="Secondary"/>
        </Link>
        </div>
    </>
  );
}

export default PlayGame;
