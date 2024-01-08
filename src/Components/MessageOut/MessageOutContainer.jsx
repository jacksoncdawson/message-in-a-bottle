import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase";
import MessageOutView from "./MessageOutView";

function MessageOutContainer() {
  const [message, setMessage] = useState("");

  // Input Change Handler (Limit to 500 Characters)
  const handleInputChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length > 500) {
      setMessage(inputText.slice(0, 500));
    } else {
      setMessage(inputText);
    }
  };

  // Submit Handler (Add Message to Firestore)
  const handleSubmit = async () => {
    // Handle Empty Message
    if (message.trim() === "") {
      alert("Cannot submit an empty message.");
      return;
    }

    // Handle Message Submission
    try {
      await addDoc(collection(db, "messages"), {
        text: message,
      });
      alert("Message submitted!");
    } catch (error) {
      alert("Error submitting message: ", error);
    }
    setMessage("");
  };

  return (
    <MessageOutView
      message={message}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default MessageOutContainer;
