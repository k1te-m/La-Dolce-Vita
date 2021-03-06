import React, { useEffect } from "react";
import Jumbotron from "./jumbotron/Jumbotron";
import History from "./history/History";
import Featured from "./featured/Featured";
import Delivery from "./delivery/Delivery";
import Contact from "./contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, loadUser } from "../auth/authSlice";

const Landing = () => {
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.user) {
      dispatch(loadUser());
    }
  }, [auth.user, dispatch]);

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
