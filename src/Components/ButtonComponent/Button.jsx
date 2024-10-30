function Button({
  text = "Click Me",
  onPressHandler,
  styleType = "Primary",
  type = "button",
}) {
  function getButtonStyling(styleType) {
    if (styleType == "Primary") {
      return "bg-blue-500";
    } else if (styleType == "error") {
      return "bg-red-500";
    } else if (styleType == "Secondary") {
      return "bg-yellow-500";
    }
  }
  return (
    <button
      type={type}
      onClick={onPressHandler}
      style={{ cursor: "pointer" }}
      className={`px-6 py-2 text-white rounded-md ${getButtonStyling(
        styleType
      )}`}
    >
      {text}
    </button>
  );
}

export default Button;
