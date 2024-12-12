import React from "react";
import styles from "./Bio.module.css";

function BioView() {
	return (
		<div>
			<svg
				width="100%"
				viewBox="0 0 1440 390"
				className={styles.waveSVG}
			>
				<path
					d="M 0,400 L 0,150 C 78.98316729646169,120.90346959807627 157.96633459292337,91.80693919615253 225,103 C 292.0336654070766,114.19306080384747 347.11782892476816,165.67571281346613 418,166 C 488.88217107523184,166.32428718653387 575.5623497080043,115.49020954998284 637,100 C 698.4376502919957,84.50979045001716 734.6327722432154,104.36344898660255 800,126 C 865.3672277567846,147.63655101339745 959.9065613191342,171.055994503607 1042,159 C 1124.0934386808658,146.944005496393 1193.7409824802473,99.41257299896942 1258,92 C 1322.2590175197527,84.58742700103058 1381.1295087598764,117.29371350051528 1440,150 L 1440,400 L 0,400 Z"
					stroke="none"
					stroke-width="0"
					fill="#2080a6"
					fill-opacity="1"
					class="transition-all duration-300 ease-in-out delay-150 path-0"
				></path>
			</svg>
			<div className={styles.bioContainer}>
				<h2 className={styles.title}>What is "Message in a Bottle?"</h2>
				<p className={styles.bioCopy}>
					"Message in a Bottle" is my first project aimed at helping me build
					responsive designs, integrate a database service, and create something
					fun and engaging to use. This app allows users to send and receive
					messages as if they were sending a message in a bottle, adding a
					whimsical and nostalgic touch to digital communication.
				</p>
			</div>
		</div>
	);
}

export default BioView;
