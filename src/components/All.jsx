import React from "react";
import { NavBar } from "./NavBar";
import { Home } from ".//Home";
import { Project } from "./Project";
import { About } from "./About";
import { Whrtido } from "./Whrtido";

export const All = () => {
  return (
    <>
      <Home />
      <About />
      <Whrtido />
    </>
  );
};
