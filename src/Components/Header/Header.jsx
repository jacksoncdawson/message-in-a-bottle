import React from "react";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={styles.headerBar}>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>Message in a Bottle</h1>
				<p className={styles.subtitle}>Cast your messages away...</p>
			</div>
		</div>
	);
};

export default Header;
