import React from "react";
import styles from "./App.module.css";
import MessageOutContainer from "../MessageOut/MessageOutContainer.jsx";
import MessageInContainer from "../MessageIn/MessageInContainer.jsx";
import Header from "../Header/Header.jsx";
import BioContainer from "../Bio/BioContainer.jsx";

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<div className={styles.content}>
				<MessageOutContainer />
				<MessageInContainer />
			</div>
			<BioContainer />
		</div>
	);
}

export default App;
