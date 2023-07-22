import { Field, ErrorMessage } from 'formik';

const Email = ({ ...props }) => {
  return (
    <div className="flex flex-col content-start pb-10">
      {props.title && <label htmlFor={props.id || props.name}>{props.title}</label>}
      <Field {...props} className="border-none border-b-2 border-black" />
      <ErrorMessage name={props.name} render={msg => <div className="error">{msg}</div>} />
    </div>
  );
};

export default Email;