import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Link className={styles.links} to="/">
				Home
			</Link>
			<Link className={styles.links} to="about">
				About
			</Link>
			<Link className={styles.links} to="menu">
				Menu
			</Link>
			<Link className={styles.links} to="awards">
				Awards
			</Link>
			<Link className={styles.links} to="gallery">
				Gallery
			</Link>
			<Link className={styles.links} to="team">
				Team
			</Link>
			<Link className={styles.links} to="contact">
				Contact
			</Link>
		</nav>
	);
}
