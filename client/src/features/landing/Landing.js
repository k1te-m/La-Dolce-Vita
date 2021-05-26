import React from "react";
import Jumbotron from "./jumbotron/Jumbotron";
import History from "./history/History";
import Featured from "./featured/Featured";
import Delivery from "./delivery/Delivery";
import Contact from "./contact/Contact";

const Landing = () => {
  return (
    <>
      <Jumbotron />
      <Featured />
      <History />
      <Delivery />
      <Contact />
    </>
  );
};

export default Landing;
