import Button from "../ButtonComponent/Button";
import TextInput from "../TextInput/TextInput";

function TextInputContainer({
  label,
  placeHolder,
  value,
  setValue,
  hint,
  setHint,
  type,
  hideShow,
  onHideShowPress,
  onSubmitPress,
  onQuitPress
}) {
  return (
    <div className="flex flex-col align-center justify-center m-5">
      <TextInput
        label={label}
        placeholder={placeHolder}
        value={value}
        setValue={setValue}
        type={type}
      />
      <TextInput
        label={"Hint"}
        placeholder={"Enter Hint"}
        value={hint}
        setValue={setHint}
      />
      <div className="flex self-center m-2">
        <Button
          styleType="Secondary"
          text={hideShow}
          onPressHandler={onHideShowPress}
        />
      </div>
      <div className="flex self-center m-2">
        <Button
          type="submit"
          styleType="Primary"
          text={"Submit"}
          onPressHandler={onSubmitPress}
        />
      </div>
      <div className="flex self-center m-2">
        <Button
          type="submit"
          styleType="error"
          text={"Quit"}
          onPressHandler={onQuitPress}
        />
      </div>
    </div>
  );
}

export default TextInputContainer;
