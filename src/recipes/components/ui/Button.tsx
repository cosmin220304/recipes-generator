import React from "react";

function Button(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      {...props}
      className={
        "bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded " +
        props.className
      }
    >
      {props.children}
    </button>
  );
}

export default Button;
