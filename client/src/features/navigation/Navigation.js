import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, LOGOUT } from "../auth/authSlice";

const Navigation = () => {
  const auth = useSelector(selectAuth);
  const { isAuthenticated } = auth;
  const dispatch = useDispatch();

  return (
    <div className="container-fluid header navigation">
      <div className="row">
        {!isAuthenticated && (
          <>
            <div className="col">
              <Link to="/register">Register</Link>
            </div>
            <div className="col">
              <Link to="/login">Login</Link>
            </div>
          </>
        )}

        <div className="col">
          <Link>Menu</Link>
        </div>
        <div className="col">
          <Link>Contact</Link>
        </div>
        {isAuthenticated && (
          <>
            <div className="col">
              <Link>Profile</Link>
            </div>
            <div className="col">
              <Link onClick={() => dispatch(LOGOUT())}>Logout</Link>
            </div>
          </>
        )}
        <div className="col">
          <i className="fas fa-shopping-cart" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
