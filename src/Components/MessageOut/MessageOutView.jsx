import React from "react";
import styles from "./MessageOut.module.css";
import Button from "../Button/Button";

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

			<Button label="Send Message" onClick={handleSubmit} />
		</div>
	);
}

export default MessageOutView;
