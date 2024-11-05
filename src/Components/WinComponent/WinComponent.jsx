import Button from "../ButtonComponent/Button";

function WinComponent({ handleClick }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl m-5 text-green-400">Oh yeah, you won</h1>
      <Button onPressHandler={handleClick} text="Retry" styleType="Won" />
    </div>
  );
}

export default WinComponent;
