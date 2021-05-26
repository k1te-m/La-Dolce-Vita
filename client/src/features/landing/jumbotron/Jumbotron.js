import React from "react";
import Navigation from "../../navigation/Navigation";

const Jumbotron = () => {
  return (
    <div className="container-fluid jumbotron">
      <Navigation />
      <div className="row heading">
        <h1>La</h1>
      </div>
      <div className="row">
        <h1>Dolce</h1>
      </div>
      <div className="row">
        <h1>Vita</h1>
      </div>
    </div>
  );
};

export default Jumbotron;
