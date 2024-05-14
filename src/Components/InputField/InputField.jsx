import React, { useState } from "react";
import './InputField.css';

const InputField = ({ type, placeholder,value, onChange, error,name}) => {

  const [isFocused, setIsFocused] = useState(false);
  // style={{ borderColor: error ? 'red' : isFocused ? 'blue' : 'grey' }}
  return (
    <>
      <div className="inputs">
      <div className="input" >
          <input type={type} placeholder={placeholder} onChange={onChange} name={name} value={value} />
        </div>
        {error && (
        <p style={{ color: 'red', fontSize: 13,marginTop:-20, marginLeft:70 }}>{error}</p>
      )}
      </div>
    </>
  );
};

export default InputField;
