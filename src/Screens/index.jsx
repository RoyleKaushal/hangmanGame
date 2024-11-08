import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInputContainer from "../Components/TextInputCantainer/TextInputContainer";
function Home() {
  const navigate = useNavigate();

  const [value, setValue] = useState();
  const [hint, setHint] = useState();
  const [type, setType] = useState("password");
  const [hideShow, setHideShow] = useState("Show");

  const onHideShowPress = () => {
    if (hideShow == "Show" && type == "password") {
      setType("text");
      setHideShow("Hide");
    } else {
      setType("password");
      setHideShow("Show");
    }
  };

  const onSubmitPress = () => {
    if (value.length === 0) {
      return;
    }
    navigate("/start", { state: {value: value, hint: hint} });
  };

  const onQuitPress = () => {
    navigate("/");
  }

  return (
    <>
      <TextInputContainer
        value={value}
        setValue={setValue}
        hint={hint}
        setHint={setHint}
        label={"Enter Value"}
        placeHolder={"Enter phrase here..."}
        type={type}
        hideShow={hideShow}
        onHideShowPress={onHideShowPress}
        onSubmitPress={onSubmitPress}
        onQuitPress={onQuitPress}
      />
    </>
  );
}

export default Home;
