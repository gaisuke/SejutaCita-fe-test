import React from "react";

const Alert = ({ text }) => {
  return (
    <div className='text-center bg-green-200 py-4 text-green-900 font-bold mb-2 rounded-lg'>
      {text}
    </div>
  );
};

export default Alert;
