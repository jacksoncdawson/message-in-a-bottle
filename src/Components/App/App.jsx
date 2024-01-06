import React from "react";
import styles from "./App.module.css";
import MessageOut from "../MessageOut/MessageOut.jsx";
import MessageIn from "../MessageIn/MessageIn.jsx";
import Header from "../Header/Header.jsx";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.content}>
        <MessageOut />
        <MessageIn />
      </div>
      <p id={styles.signature}>Jack Dawson</p>
    </div>
  );
}

export default App;