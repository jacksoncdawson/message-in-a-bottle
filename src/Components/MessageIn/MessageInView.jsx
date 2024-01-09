import React from "react";
import styles from "./MessageIn.module.css";

import noMessageImage from "./barren-island.png";

function MessageInView({ message, loading, showImage, pullMessage }) {
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
          "Read New Message"
        </button>
      </div>
    </div>
  );
}

export default MessageInView;
