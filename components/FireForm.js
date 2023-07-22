'use client'
import React, { useState, useEffect, useCallback } from "react";
import Welcome from "./InfoScreens/Welcome";
import NavButton from "./buttons/NavButton";
import InputField from "./Input/InputField";

const FireForm = ({ formConfig, onSubmit }) => {
  const [step, setStep] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  
  const nextStep = () => {
    if (showWelcome) {
      setShowWelcome(false);
    } else if (step < formConfig.inputs.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const backStep = () => {
    setStep(step - 1);
  };

  const isLastStep = step === formConfig.inputs.length - 1;

  const handleSubmit = () => {
    if (isValid) {
      // Call the onSubmit function
      onSubmit();
    }
  };

  const generateInitialValues = (inputs) => {
    let initialValues = {};
    inputs.forEach((input) => {
      initialValues[input.name] = "";
    });
    return initialValues;
  };

  return (
    <>
      <section className="px-4 flex flex-col w-full max-w-3xl">
        {showWelcome ? (
          formConfig.welcomePage ? (
            <Welcome welcomeInfo={formConfig.welcomePage} nextStep={nextStep}>
              
            </Welcome>
          ) : null
        ) : (
          <>
            {step >= 1 ? <NavButton backStep={backStep} /> : null}
            <InputField
              formField={formConfig.inputs[step]}
              initialValues={generateInitialValues(formConfig.inputs)}
              nextStep={nextStep}
              step={step}
              isLastStep= {isLastStep}
              
            >
            </InputField>
          </>
        )}
      </section>
    </>
  );
};

export default FireForm;