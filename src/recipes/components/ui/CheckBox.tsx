import React, { ReactNode, useId } from "react";

interface Props {
  value: boolean;
  children: ReactNode;
  toggle: () => void;
}

function CheckBox({ value, children, toggle }: Props) {
  const uid = useId();

  return (
    <div className="flex">
      <input
        onClick={toggle}
        id={uid}
        type="checkbox"
        value={`${value}`}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
      />
      <label
        htmlFor={uid}
        className="ml-2 text-sm font-medium text-gray-900"
      >
        {children}
      </label>
    </div>
  );
}

export default CheckBox;
