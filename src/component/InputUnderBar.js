const InputUnderBar = ({ className, item, style, type, value, onChange }) => {
  const handleBlur = (event) => {
    const value = event.target.value;
    console.log(`${type}:`, value);
  };

  return (
    <div className={className}>
      <input
        className='input-under-bar ft14r'
        type='text'
        placeholder={item}
        style={style}
        value={value}
        onBlur={handleBlur}
        onChange={onChange}
      />
    </div>
  );
};

export default InputUnderBar;