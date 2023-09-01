import { useEffect } from "react";
import { Formik, Form } from "formik";
import { validationSchemas } from "../validation/validationSchema";
import Input from "./Inputs/Input";
import Select from "./Inputs/Select";
import TextArea from "./Inputs/TextArea";
import FileUpload from "./Inputs/FileUpload";
import DateInput from "./Inputs/DateInput";
import NextButton from "../buttons/NextButton";
import SocialInputs from "./Inputs/SocialInputs";
import URLInput from "./Inputs/URLInput";

const GenerateInput = ({ formField}) => {
  switch (formField.type) {
    case "text":
      return <Input key={formField.name} {...formField}/>;
    case "email":
      return <Input key={formField.name} {...formField} />;
    case "select":
      return <Select key={formField.name} {...formField} />;
    case "textarea":
      return <TextArea key={formField.name} {...formField} />;
    case "file":
      return <FileUpload key={formField.name} {...formField} />;
    case "date":
      return <DateInput key={formField.name} {...formField} />;
    case "social":
      return <URLInput key={formField.name} {...formField} />; // Add SocialInputs case
    case "url":
      return <URLInput key={formField.name} {...formField} />; // Add URLInput case
    default:
      return null;
  }
};
const InputField = ({ formField, initialValues, nextStep, step, isLastStep }) => { 

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemas[formField.name]}
      onSubmit={(values, { setTouched }) => {
        if (!isLastStep) {
          // This will set the 'touched' state of the current field to false,
          // ensuring the 'isValid' state is also false until this field is touched.
          setTouched({ [formField.name]: false });
          nextStep();
        }
      }}
    >
      {({isValid, dirty,values, touched, handleSubmit}) => {
        return (<Form onSubmit={handleSubmit}>
          <GenerateInput formField={formField}/>
          <NextButton
            text="Ok"
            color="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            type="submit"
            isDisabled={!dirty || !isValid ||  (!touched[formField.name] && !values[formField.name])}
          />
        </Form>)}
      }
    </Formik>
  );
};

export default InputField;