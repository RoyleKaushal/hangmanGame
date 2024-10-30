import { useState } from "react";
import TextInputContainer from "../../Components/TextInputCantainer/TextInputContainer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

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

  const onSubmitPress = () => {
    if (value.length === 0) {
      return;
    }
    navigate("/start", { state: value });
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
        onSubmitPress={onSubmitPress}
      />
    </>
  );
}

export default Home;
