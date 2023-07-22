const NextButton = ({ nextStep, text, color, type, isDisabled }) => {
    
    const colorDisabled = "bg-slate-400"
    return (
      <div className="flex flex-col">
        <button
          onClick={nextStep}
          className={`${!isDisabled? color: colorDisabled} 
              whitespace-nowrap w-min px-4 py-4 
              rounded-lg text-white text-sm`}
          type={type}
          disabled={isDisabled} // Disable the button if isValid is false
        >
          {text}  
        </button>
      </div>
    );
  };
  
  export default NextButton;