import { FC } from "react";

export const Button: FC = ({ children }) => (
  <button className="bg-sky-600 py-2 px-4 rounded text-white mx-4">
    {children}
  </button>
);
