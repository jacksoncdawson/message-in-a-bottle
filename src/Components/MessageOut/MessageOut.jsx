import React, { useState } from "react";
import styles from "./MessageOut.module.css";
import db from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

function MessageOut() {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async () => {
    if (message.trim() === "") {
      alert("Cannot submit an empty message.");
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        text: message,
        timestamp: new Date(),
      });
      console.log("Message successfully submitted to Firestore.");
    } catch (error) {
      console.error("Error submitting message: ", error);
    }
    setMessage("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <textarea
          className={styles.inputField}
          placeholder="Write your message here..."
          value={message}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.submitContainer}>
        <button className={styles.submit} onClick={handleSubmit}>
          Cast Your Message Away
        </button>
      </div>
    </div>
  );
}

export default MessageOut;
