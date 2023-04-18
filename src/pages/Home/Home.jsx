import Logo from "./images/ledu.jpg";
import styles from "../Home/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
	return (
		<div className={styles[`main-container`]}>
			<div className={styles[`img-container`]}>
				<img src={Logo} alt="ledu-logo" />
			</div>
			<div className={styles[`sub-text`]}>ฤดู - Seasonal</div>
			<div className={styles[`container`]}>
				<div className={styles[`social-media`]}>
					<a
						className={styles["social-links"]}
						href="https://www.facebook.com/LeDuWineBarandrestaurant/"
						target="_blank"
					>
						<FontAwesomeIcon icon={faFacebookF} />
					</a>
					<a className={styles["social-links"]} href="https://www.instagram.com/ledubkk/" target="_blank">
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a className={styles["social-links"]} href="https://goo.gl/maps/XJcEeLyfYbk1eFXi6" target="_blank">
						<FontAwesomeIcon icon={faLocationDot} />
					</a>
					<a className={styles["social-links"]} href="mailto:info@ledubkk.com" target="_blank">
						<FontAwesomeIcon icon={faEnvelope} />
					</a>
				</div>
			</div>
		</div>
	);
}
