import React from "react";

const FormInput = ({ label, type, name, value, onChange, required = false, className = 'divGrid' }) => {
  return (
    <div className={className}>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={label}
        onChange={onChange}
        className='form-control'
        required={required}
      />
    </div>
  );
};

export default FormInput;
