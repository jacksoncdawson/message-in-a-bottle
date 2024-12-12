import React from "react";
import styles from "./Button.module.css";

function Button({ label, onClick, disabled }) {
	return (
		<button className={styles.button} onClick={onClick} disabled={disabled}>
			{label}
		</button>
	);
}

export default Button;
