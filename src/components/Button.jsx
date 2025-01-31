import React from "react";

const Button = (props) => {
  const { label, onClick, primary = true } = props;

  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-xl cursor-pointer transition ease-out shadow-sm
${
  primary
    ? " bg-emerald-500 hover:bg-emerald-600 text-white"
    : " bg-white border-1 border-emerald-500 hover:bg-emerald-100 text-emerald-500"
}`}
    >
      {label}
    </button>
  );
};

export default Button;
