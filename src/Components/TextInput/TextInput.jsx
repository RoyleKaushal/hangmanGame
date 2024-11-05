function TextInput({ type = "text", value, setValue, placeholder, label }) {
  const handleInputText = (text) => {
    setValue(text.target.value);
  };
  return (
    <>
      <label className="flex align-center justify-center">
        <span className="text-black-800 font-bold text-5xl text-center">{label}</span>
      </label>
      <input
        type={type}
        value={value}
        onChange={handleInputText}
        className="px-8 py-4 border rounded border-gray-500 w-full mt-3"
        placeholder={placeholder}
      />
    </>
  );
}

export default TextInput;
