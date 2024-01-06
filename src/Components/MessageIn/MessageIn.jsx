import React, { useState } from "react";
import styles from "./MessageIn.module.css";
import {
  collection,
  getDocs,
  doc,
  query,
  limit,
  deleteDoc,
} from "firebase/firestore";
import db from "../../firebase";
import noMessageImage from "./barren-island.png";

function MessageIn() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleNoMessage = () => {
    setShowImage(true);
  };

  const pullMessage = async () => {
    try {
      setLoading(true);
      const messageQuery = query(collection(db, "messages"), limit(1));
      const messageSnapshot = await getDocs(messageQuery);

      const messageData = messageSnapshot.docs.map((doc) => ({
        id: doc.id,
        text: doc.data().text,
      }));

      if (messageData.length === 0) {
        handleNoMessage();
        return;
      } else {
        setShowImage(false);
      }

      setMessage(messageData[0].text);
      deleteDoc(doc(db, "messages", messageData[0].id));
    } catch (error) {
      console.error("Error pulling message: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.readContainer}>
        {showImage ? (
          <div className={styles.noMessagesContainer}>
            <p>There are no messages...</p>
            <img
              src={noMessageImage}
              alt="No Message"
              className={styles.noMessageImage}
            />
          </div>
        ) : (
          <textarea
            className={styles.readField}
            value={message}
            placeholder={loading ? "Loading..." : "No message loaded..."}
            readOnly={true}
          />
        )}
      </div>
      <div className={styles.loadContainer}>
        <button
          className={styles.load}
          onClick={pullMessage}
          disabled={loading}
        >
          {loading ? "Loading..." : "Read New Message"}
        </button>
      </div>
    </div>
  );
}

export default MessageIn;
