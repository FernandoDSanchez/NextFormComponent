import { Field, ErrorMessage } from "formik";

const Select = ({ title, name, placeholder, options }) => {
  return (
    <div className="select-field pb-10 flex flex-col">
      {title && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {title}
        </label>
      )}
      <Field
        as="select"
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default Select;
