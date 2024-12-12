import React from "react";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<nav className={styles.headerBar}>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>Message in a Bottle</h1>
				<p className={styles.subtitle}>Cast your messages away...</p>
			</div>
		</nav>
	);
};

export default Header;
