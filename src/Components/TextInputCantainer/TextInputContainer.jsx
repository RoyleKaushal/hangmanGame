import Button from "../ButtonComponent/Button";
import TextInput from "../TextInput/TextInput";

function TextInputContainer({ label, placeHolder, value, setValue, type, hideShow, onHideShowPress }) {
    
  return (
    <div className="input-container">
      <TextInput label={label} placeholder={placeHolder} value={value} setValue={setValue} type={type} />
      <div>
        <Button styleType='Secondary' text={hideShow} onPressHandler={onHideShowPress} />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
}

export default TextInputContainer;
