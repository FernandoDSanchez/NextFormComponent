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
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    );
  };
  
  export default TextArea;