import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { auth, db } from "../firebase";
import "./SendMessage.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter some message");
      return;
    }

    const currentUser = auth.currentUser;
    if (!currentUser) {
      return;
    }

    const { uid, displayName } = currentUser;
    try {
      await addDoc(collection(db, "messages"), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp(),
      });
      setInput("");
      scroll.current.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      // Handle the error here
      console.log("Error sending message:", error);
    }
  };

  return (
    <>
      <form className="form" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
          placeholder="Message"
        />
        <button className="button" type="submit">
          <IoMdSend size={30} />
        </button>
      </form>
    </>
  );
};

export default SendMessage;
