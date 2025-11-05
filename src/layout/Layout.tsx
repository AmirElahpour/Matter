import React from "react";
import Navbar from "../components/Navbar";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
