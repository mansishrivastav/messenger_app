import React from "react";
import "./LogOut.css";
import { auth } from "../firebase";

const LogOut = () => {
  const logMeOut = () => {
    auth.signOut();
  };

  return (
    <button className="btn" onClick={logMeOut}>
      Log out
    </button>
  );
};

export default LogOut;
