import { NavBar } from "./NavBar";
import React from "react";
import { Outlet } from "react-router-dom";

export const RouterLayout: React.FC<{}> = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
