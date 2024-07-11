import React from "react";

export function H1({ children }) {
  return (
    <h1 className="sm:pb-11 pb-2  text-center md:text-6xl sm:text-4xl text-3xl uppercase tracking-wider">
      {children}
    </h1>
  );
}
export function H2({ children }) {
  return (
    <h2 className=" pb-2 sm:pt-14 pt-10 text-center md:text-5xl sm:text-3xl text-2xl uppercase tracking-wider">
      {children}
    </h2>
  );
}

export function H3({ children }) {
  return (
    <h3 className=" pb-2 sm:pt-12 pt-8  md:text-3xl sm:text-2xl text-xl  uppercase tracking-wider">
      {children}
    </h3>
  );
}
export function H4({ children }) {
  return (
    <h4 className=" sm:pt--8 pt--4  font-normal md:text-2xl sm:text-xl text-lg sm:pb-4 pb-2">
      {children}
    </h4>
  );
}
export function H5({ children }) {
  return (
    <h5 className=" font-normal md:text-xl sm:text-lg text-base sm:pb-4 pb-2">
      {children}
    </h5>
  );
}

export function P({ children, className }) {
  return <p className={`sm:pb-4 pb-2 font-light ${className}`}>{children}</p>;
}
