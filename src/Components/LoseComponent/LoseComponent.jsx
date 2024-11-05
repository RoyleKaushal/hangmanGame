import Button from "../ButtonComponent/Button";

function LoseComponent({ handleClick }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl m-5 text-red-400">Oh sorry, you Lose</h1>
      <Button onPressHandler={handleClick} text="Try again" styleType="error" />
    </div>
  );
}

export default LoseComponent;
