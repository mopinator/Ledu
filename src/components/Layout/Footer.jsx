import styles from "./Footer.module.css";

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<>
			<div className={styles.footer}>
				© <span>{year}</span> Ledu. All Rights Reserved.
			</div>
		</>
	);
}
