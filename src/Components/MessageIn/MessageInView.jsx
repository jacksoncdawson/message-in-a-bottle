import React from "react";
import styles from "./MessageIn.module.css";
import Button from "../Button/Button";

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
			<Button label="Read Message" onClick={pullMessage} disabled={loading} />
		</div>
	);
}

export default MessageInView;
