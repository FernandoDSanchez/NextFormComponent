import { useFormikContext, Field, ErrorMessage } from 'formik';

const Input = ({ name, type, placeholder, title, helpText, required, max, validated}) => {
  const { errors, values } = useFormikContext();
  const requiredSign = required? '*' : '';
  const isFilled = values[name] !== '';
  return (
    <div className="flex flex-col content-start pb-10">
      <label htmlFor={name}className='text-xl'>{title} {requiredSign}</label>
      <small>{helpText}</small>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`mt-8 focus:shadow-soft-primary-outline
        dark:bg-white placeholder:text-black/80 
        text-black/80 text-sm leading-5.6 ease-soft block 
        w-full appearance-none rounded-lg border border-solid 
        border-gray-300 bg-white bg-clip-padding px-3 
        py-2 font-normal text-gray-700 outline-none transition-all 
        placeholder:text-gray-500 focus:border-fuchsia-300 
        focus:outline-none`}/>
      {errors[name] ? <ErrorMessage name={name} />: <span>{isFilled? validated: <b></b>}</span>}
    </div>
  );
};

export default Input;
