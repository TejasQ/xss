import { FC } from "react";

export const NoodlePage: FC = ({ children }) => (
  <div className="w-screen h-screen flex items-center content-center flex-col gap-8 justify-center">
    <div className="text-8xl" style={{ fontFamily: "comic sans ms" }}>
      <span className="text-amber-600">n</span>
      <span className="text-lime-600">o</span>
      <span className="text-sky-600">o</span>
      <span className="text-yellow-600">d</span>
      <span className="text-red-700">l</span>
      <span className="text-purple-700">e</span>
    </div>
    {children}
  </div>
);
