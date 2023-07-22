import { useFormikContext, Field, FieldArray, ErrorMessage } from 'formik';

const SocialInputs = ({ name, placeholder, title, helpText, required }) => {
  const { errors, values, setFieldValue } = useFormikContext();
  const requiredSign = required ? '*' : '';

  return (
    <div className="flex flex-col content-start pb-10">
      <label htmlFor={name} className='text-xl'>{title} {requiredSign}</label>
      <small>{helpText}</small>
      <FieldArray
        name={name}
        render={arrayHelpers => (
          <div>
            {values[name] && values[name].length > 0 ? (
              values[name].map((url, index) => (
                <div key={index}>
                  <Field
                    id={`${name}.${index}`}
                    name={`${name}.${index}`}
                    type='url'
                    placeholder={placeholder}
                    className={`mt-8 focus:shadow-soft-primary-outline
                    dark:bg-white placeholder:text-black/80 
                    text-black/80 text-sm leading-5.6 ease-soft block 
                    w-full appearance-none rounded-lg border border-solid 
                    border-gray-300 bg-white bg-clip-padding px-3 
                    py-2 font-normal text-gray-700 outline-none transition-all 
                    placeholder:text-gray-500 focus:border-fuchsia-300 
                    focus:outline-none`}
                  />
                  <button type="button" onClick={() => arrayHelpers.remove(index)}>Remove URL</button>
                  {errors[name] && errors[name][index] && <ErrorMessage name={`${name}.${index}`} />}
                </div>
              ))
            ) : null}
            <button type="button" onClick={() => arrayHelpers.push('')}>Add a URL</button>
          </div>
        )}
      />
    </div>
  );
};

export default SocialInputs;