import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, loginUser } from "../auth/authSlice";
import { SET_ALERT } from "../alert/alertSlice";

const Login = (props) => {
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.isAuthenticated) {
      props.history.push("/");
    }
  }, [auth.isAuthenticated, props.history, dispatch]);

  // State Object for user email and password inputs
  const [userObject, setUserObject] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userObject;

  // Handles input changes for email/password inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserObject({ ...userObject, [name]: value });
  };

  /* Handles form submit for login, checks to see if all fields 
     have been entered. Sends user an alert if a field is missing.
     Checks to see if the email provided matches proper email format
     and sends alert if it does not. If criteria met, dispatch(loginUser)
     is called, checking user credentials and providing token and user data
     if valid.
  */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const mailformat = /.+@.+\..+/;
    if (email === "" || password === "") {
      dispatch(
        SET_ALERT({
          message: "Please enter all available fields.",
          type: "danger",
        })
      );
    } else if (!email.match(mailformat)) {
      dispatch(
        SET_ALERT({
          message: "Please enter a valid email address.",
          type: "danger",
        })
      );
    } else {
      dispatch(loginUser({ email, password }));
      if (auth.error === "Invalid credentials.") {
        dispatch(
          SET_ALERT({ message: "Invalid credentials.", type: "danger" })
        );
      }
    }
  };

  return (
    <>
      <div className="container login">
        <div className="row">
          <h3>Account Log In</h3>
        </div>
        <div className="row">
          <form>
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              onChange={handleInputChange}
              name="email"
              placeholder="ksmith@gmail.com"
              type="email"
            />
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              onChange={handleInputChange}
              name="password"
              placeholder="password"
              type="password"
            />
            <button
              className="button btn login-btn mt-3 mb-3"
              onClick={handleFormSubmit}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
