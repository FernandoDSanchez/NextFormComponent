import { useFormikContext } from 'formik';

const TextArea = ({ name, placeholder, title, required, max }) => {
  const { handleChange, handleBlur, values, errors, touched } = useFormikContext();

  return (
    <div className="textarea-field">
      {title && <label htmlFor={name}>{title}</label>}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        maxLength={max}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors[name] && touched[name] ? 'border-red-500' : ''}`}
      />
      {errors[name] && touched[name] ? (
        <div className="text-red-500 text-sm">{errors[name]}</div>
      ) : null}
    </div>
  );
};

export default TextArea;