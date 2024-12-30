import React from "react";
import styles from "./Bio.module.css";
import headshot from "./headshot.png";
import blob from "./blob.svg";

function BioView() {
	return (
		<div className={styles.bioContainer}>
			<div class={styles.wave}>
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						class={styles.shapeFill}
					></path>
				</svg>
			</div>
			<div className={styles.bioContent}>
				<div className={styles.leftSection}>
					<h2 className={styles.title}>What is "Message in a Bottle"?</h2>
					<div className={styles.bioCopyContainer}>
						<p className={styles.bioCopy}>
							"Message in a Bottle" is my first project aimed at helping me
							build responsive designs, integrate a database service, and create
							something fun and engaging to use. This app allows users to send
							and receive messages as if they were sending a message in a
							bottle, adding a whimsical and nostalgic touch to digital
							communication.
						</p>
						<p className={styles.bioCopy}>
							The idea behind "Message in a Bottle" is to bring back the charm
							of handwritten letters and the excitement of finding a message
							washed ashore. In today's fast-paced digital world, we often
							forget the joy of waiting for a letter or the thrill of
							discovering a hidden message. This project aims to recreate that
							experience in a modern, digital format.
						</p>
					</div>
				</div>

				<div className={styles.rightSection}>
					<div
						className={styles.headshotWrapper}
						style={{
							position: "relative",
							backgroundColor: "white",
							maskImage: `url(${blob})`,
							WebkitMaskImage: `url(${blob})`,
							maskSize: "cover",
							WebkitMaskSize: "cover",
							maskRepeat: "no-repeat",
							WebkitMaskRepeat: "no-repeat",
						}}
					>
						<img src={headshot} alt="Jack Dawson" className={styles.headshot} />
					</div>
					<div className={styles.creditInfo}>
						<h3 className={styles.creditTitle}>Jack Dawson</h3>
						<a
							className={styles.link}
							href="https://www.linkedin.com/in/jacksoncdawson"
						>
							LinkedIn
						</a>
						<a className={styles.link} href="https://github.com/jacksoncdawson">
							Github
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BioView;
