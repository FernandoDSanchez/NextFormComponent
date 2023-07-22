import React from "react";
import NextButton from "../buttons/NextButton";

const Welcome = ({ welcomeInfo, children, nextStep}) => {
    
  return (
    <div className="flex flex-col items-center">
      <div className="pb-10 ">
        <h1 className="font-oswald text-xl text-center">{welcomeInfo.title}</h1>
        <p className="font-sans text-center text-sm">{welcomeInfo.description}</p>
      </div>
      {children}
      <NextButton
        nextStep={nextStep}
        text={welcomeInfo.buttonText}
        color="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        type="button"
        isDisabled={false}
      />
    </div>
  );
};

export default Welcome;