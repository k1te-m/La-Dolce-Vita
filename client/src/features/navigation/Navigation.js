import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="container-fluid header navigation">
      <div className="row">
        <div className="col">
          <Link>Register/Login</Link>
        </div>
        <div className="col">
          <Link>Menu</Link>
        </div>
        <div className="col">
          <Link>Contact</Link>
        </div>
        <div className="col">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
