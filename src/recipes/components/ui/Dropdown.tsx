import React, {
  MouseEventHandler,
  useId,
  useState,
} from "react";
import ArrowDown from "@/components/icons/ArrowDown";

interface Props {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

function Dropdown({ value, onChange, options }: Props) {
  const uid = useId();
  const [active, setActive] = useState(false);

  return (
    <div className="relative">
      <button
        id={uid}
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={() => setActive((prev) => !prev)}
      >
        {value} <ArrowDown />
      </button>
      {active && (
        <div
          id={uid}
          className="z-10 absolute z-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <ul className="py-2 text-sm text-gray-700">
            {options.map(
              (option: string, index: number) => (
                <li
                  key={index}
                  onClick={(e) => {
                    onChange(option);
                    setActive(false);
                  }}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {option}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
