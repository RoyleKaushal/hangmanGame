function TextInput ({ type="text", value, setValue, placeholder, label }) {
    const handleInputText = (text)=> {
        // console.log(text.target.value)
        setValue(text.target.value)
    }
    return (
        <>
            <label><span className="text-black-600">{label}</span></label>
            <input type={type} value={value} onChange={handleInputText} className="px-4 py-2 border rounded border-gray-500 w-full mt-3" placeholder={placeholder} />
        </>
    )
}

export default TextInput;