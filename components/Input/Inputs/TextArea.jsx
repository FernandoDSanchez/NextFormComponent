const TextArea = ({ name, placeholder, title, required, max, handleChange }) => {
    return (
      <div className="textarea-field">
        {title && <label htmlFor={name}>{title}</label>}
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          maxLength={max}
          onChange={(e) => handleChange(e, { name, type: 'textarea' })}
        />
      </div>
    );
  };
  
  export default TextArea;