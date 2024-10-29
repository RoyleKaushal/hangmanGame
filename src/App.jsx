import { useState } from "react";
import "./App.css";
import Button from "./Components/ButtonComponent/Button";
import TextInput from "./Components/TextInput/TextInput";
import TextInputContainer from "./Components/TextInputCantainer/TextInputContainer";

function App() {
  const [value, setValue] = useState();
  const [type, setType] = useState("text");
  const [hideShow, setHideShow] = useState("Hide");

  const onHideShowPress = () => {
    if (hideShow == "Show" && type == "password") {
      setType("text");
      setHideShow("Hide");
    } else {
      setType("password");
      setHideShow("Show");
    }
  };

  return (
    <>
      <TextInputContainer
        value={value}
        setValue={setValue}
        label={"Enter Value"}
        placeHolder={"Enter phrase here..."}
        type={type}
        hideShow={hideShow}
        onHideShowPress={onHideShowPress}
      />
    </>
  );
}

export default App;
