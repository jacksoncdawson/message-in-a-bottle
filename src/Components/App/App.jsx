import React from "react";
import styles from "./App.module.css";
import MessageOut from "../MessageOut/MessageOut.jsx";
import MessageIn from "../MessageIn/MessageIn.jsx";

function App() {
  return (
    <div className={styles.App}>
      <MessageOut />
      <MessageIn />
    </div>
  );
}

export default App;
