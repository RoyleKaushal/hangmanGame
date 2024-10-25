import "./App.css";
import Button from "./Components/ButtonComponent/Button";

function App() {
  return (
    <>
      <div>
        <Button text={"Submit"} />
      </div>
      <div>
        <Button text={"Delete"} styleType="error" />
      </div>
      <div>
        <Button text={"Hide/Show"} styleType="Secondary" />
      </div>
    </>
  );
}

export default App;
