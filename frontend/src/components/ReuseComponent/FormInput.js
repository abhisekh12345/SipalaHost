import React from "react";

const FormInput = ({type,placeholder,multiline}) => {
  return (
    <>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          className="h-[45px] px-2 textColor bg-gray-50"
          multiline= {multiline}

        />
      </div>
    </>
  );
};

export default FormInput;
