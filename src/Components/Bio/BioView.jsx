import React from "react";
import styles from "./Bio.module.css";
import headshot from "./headshot.png";
import blob from "./blob.svg";

function BioView() {
	return (
		<div className={styles.bioContainer}>
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
					<h3 className={styles.creditTitle}>Jack Dawson</h3>
				</div>
			</div>
		</div>
	);
}

export default BioView;
