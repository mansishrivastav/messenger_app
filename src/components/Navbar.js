import React from "react";
import "./Navbar.css";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";
import {BsWhatsapp} from "react-icons/bs"

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="nav">
      <h1 className="heading"><BsWhatsapp size={40}/></h1>
      {user?<LogOut />:<SignIn />}
      
    </div>
  );
};

export default Navbar;
