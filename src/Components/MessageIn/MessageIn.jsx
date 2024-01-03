import React, { useState, useEffect } from "react";
import styles from "./MessageIn.module.css";
import {
  collection,
  getDocs,
  deleteDoc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { doc } from "firebase/firestore";
import db from "../../firebase";

function MessageIn() {
  const [incomingMessage, setIncomingMessage] = useState("");
  const [messageQueue, setMessageQueue] = useState([]);
  const [loading, setLoading] = useState(false);

  // pull messages on mount
  useEffect(() => {
    pullMessages();
  }, []);

  const pullMessages = async () => {
    try {
      setLoading(true);

      const orderedQuery = query(
        collection(db, "messages"),
        orderBy("__name__"),
        limit(30)
      );

      const snapshot = await getDocs(orderedQuery);
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        text: doc.data().text,
      }));

      setMessageQueue(messages);
    } catch (error) {
      console.error("Error loading messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadRandomMessage = async () => {
    try {
      if (messageQueue.length === 0) {
        // If the messageQueue is empty, load a new set of messages
        await pullMessages();
      }

      // If there are still no messages after attempting to load
      if (messageQueue.length === 0) {
        setIncomingMessage("No more messages available.");
        return;
      }

      const randomIndex = Math.floor(Math.random() * messageQueue.length);
      const randomMessage = messageQueue[randomIndex];

      // Delete the message from the database
      await deleteMessage(randomMessage.id);

      // Update the local array by removing the chosen message
      setMessageQueue((prevQueue) =>
        prevQueue.filter((message) => message.id !== randomMessage.id)
      );

      setIncomingMessage(randomMessage.text);
    } catch (error) {
      console.error("Error loading random message:", error);
      setIncomingMessage("Error loading message. Please try again.");
    }
  };

  const deleteMessage = async (messageId) => {
    try {
      // Delete the message from the database
      await deleteDoc(doc(db, "messages", messageId));
      console.log("Message deleted successfully.");
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.readContainer}>
        <textarea
          className={styles.readField}
          value={incomingMessage}
          placeholder={loading ? "Loading..." : "No message loaded..."}
          readOnly={true}
        />
      </div>
      <div className={styles.loadContainer}>
        <button
          className={styles.load}
          onClick={loadRandomMessage}
          disabled={loading}
        >
          {loading ? "Loading..." : "Read New Message"}
        </button>
      </div>
    </div>
  );
}

export default MessageIn;
