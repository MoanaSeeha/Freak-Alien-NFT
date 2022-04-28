import React from "react";

import Container from "./Container";
import About from "./About";
import Gallery from "./Gallery";
import Roadmap from "./Roadmap";
import Welcome from "./Welcome";

const Main = () => {
  return (
    <div className="main relative overflow-x-hidden">
      <Container/>
      <About/>
      <Gallery/>
      <Welcome/>
      <Roadmap/>
    </div>
  )
}

export default Main