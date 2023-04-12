import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
	const [openNav, setOpenNav] = useState(true);

	function handleChange() {
		setOpenNav(() => !openNav);
	}

	return (
		<>
			<div className={styles["hamburger"]}>
				{openNav ? (
					<FontAwesomeIcon className={styles["hamburger-icon"]} icon={faBars} onClick={handleChange} />
				) : (
					<FontAwesomeIcon className={styles["close-icon"]} icon={faTimes} onClick={handleChange} />
				)}
			</div>
			<nav className={!openNav ? styles["navbar"] : styles["hidden-nav"]}>
				<div className={styles["links-container"]}>
					<Link onClick={handleChange} className={styles.links} to="/">
						Home
					</Link>
					<Link onClick={handleChange} className={styles.links} to="about">
						About
					</Link>
					<Link onClick={handleChange} className={styles.links} to="menu">
						Menu
					</Link>
					<Link onClick={handleChange} className={styles.links} to="gallery">
						Gallery
					</Link>
					<Link onClick={handleChange} className={styles.links} to="team">
						Team
					</Link>
					<Link onClick={handleChange} className={styles.links} to="contact">
						Contact
					</Link>
				</div>
			</nav>
		</>
	);
}
