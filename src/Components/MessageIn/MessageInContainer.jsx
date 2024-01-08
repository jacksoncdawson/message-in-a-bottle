import React, { useState } from "react";
import {
  collection,
  getDocs,
  doc,
  query,
  limit,
  deleteDoc,
} from "firebase/firestore";
import db from "../../firebase";
import MessageInView from "./MessageInView";

function MessageInContainer() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showImage, setShowImage] = useState(false);

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
        setShowImage(true);
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
    <MessageInView
      message={message}
      loading={loading}
      showImage={showImage}
      pullMessage={pullMessage}
    />
  );
}

export default MessageInContainer;