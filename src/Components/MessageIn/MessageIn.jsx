import React, { useState } from "react";
import styles from "./MessageIn.module.css";
import db from "../../firebase"; // Adjust the relative path as needed
import { collection, getDocs, deleteDoc } from "firebase/firestore";

function MessageIn() {
  const [incomingMessage, setIncomingMessage] = useState("");

  const loadRandomMessage = async () => {
    try {
      // Get a snapshot of the messages collection
      const querySnapshot = await getDocs(collection(db, "messages"));
      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        text: doc.data().text,
      }));

      // Filter out the currently displayed message if it exists
      const newMessages = messages.filter(
        (message) => message.text !== incomingMessage
      );

      // Select a random message from the new list if there are any messages
      if (newMessages.length > 0) {
        const randomIndex = Math.floor(Math.random() * newMessages.length);
        setIncomingMessage(newMessages[randomIndex].text);
      } else {
        setIncomingMessage("No new messages available.");
      }
    } catch (error) {
      console.error("Failed to load message:", error);
      setIncomingMessage("Failed to load message.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.readContainer}>
        <textarea
          className={styles.readField}
          value={incomingMessage}
          placeholder="No message loaded..."
          readOnly={true}
        />
      </div>
      <div className={styles.loadContainer}>
        <button className={styles.load} onClick={loadRandomMessage}>
          Read New Message
        </button>
      </div>
    </div>
  );
}

export default MessageIn;
