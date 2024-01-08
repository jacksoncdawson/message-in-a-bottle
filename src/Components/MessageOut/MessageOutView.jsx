import React from "react";
import styles from "./MessageOut.module.css";

function MessageOutView({ message, handleInputChange, handleSubmit }) {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <textarea
          className={styles.inputField}
          placeholder="Write your message here..."
          value={message}
          onChange={handleInputChange}
        />
        <p>{message.length}/500</p>
      </div>
      <div className={styles.submitContainer}>
        <button className={styles.submit} onClick={handleSubmit}>
          Send Your Message
        </button>
      </div>
    </div>
  );
}

export default MessageOutView;
