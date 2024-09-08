import React from "react";

const Container = ({ children }) => {
  return <div className="max-w-7xl px-4 mx-auto z-10 bg-white dark:bg-themeBlack ">{children}</div>;
};

export default Container;