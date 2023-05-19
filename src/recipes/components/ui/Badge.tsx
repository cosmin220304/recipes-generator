"use client";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: "blue" | "green" | "yellow";
}

function Badge({ children, color }: Props) {
  if (color === "blue") {
    return (
      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-blue-900 dark:text-blue-300">
        {children}
      </span>
    );
  }

  if (color === "green") {
    return (
      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300">
        {children}
      </span>
    );
  }

  return (
    <span
      className={`bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-red-900 dark:text-red-300`}
    >
      {children}
    </span>
  );
}

export default Badge;
