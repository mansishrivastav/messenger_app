import React from "react";
import "./Messages.css";
import { auth } from "../firebase";

const Messages = ({ message }) => {
  const messageClass =
    auth.currentUser?.uid === message.uid ? "sent" : "received";

  return (
    <div>
      <div className={`message ${messageClass}`}>
        <p className="user">{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Messages;
