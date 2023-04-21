import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
	const [openNav, setOpenNav] = useState(false);

	function handleChange() {
		setOpenNav(() => !openNav);
	}

	return (
		<>
			<div className={styles["hamburger"]}>
				{!openNav ? (
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
				<div className={openNav ? styles["show-nav-social-icons"] : styles["hide-nav-social-icons"]}>
					<a href="https://www.facebook.com/Ledurestaurant/" target="_blank">
						<FontAwesomeIcon className={styles["nav-social-icons"]} icon={faFacebookF} />
					</a>
					<a href="https://www.instagram.com/ledubkk/" target="_blank">
						<FontAwesomeIcon className={styles["nav-social-icons"]} icon={faInstagram} />
					</a>
				</div>
			</nav>
		</>
	);
}
