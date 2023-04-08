import Logo from "./images/ledu.jpg";
import styles from "../Home/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationPin } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
	return (
		<>
			<div className={styles[`img-container`]}>
				<img src={Logo} alt="ledu-logo" />
			</div>

			<div className={styles[`sub-text`]}>ฤดู - Seasonal</div>
			<div className={styles.container}>
				<div className={styles[`social-media`]}>
					<a href="https://www.facebook.com/LeDuWineBarandrestaurant/" target="_blank">
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a href="https://www.instagram.com/ledubkk/" target="_blank">
						<FontAwesomeIcon icon={faInstagramSquare} />
					</a>
					<a href="mailto:info@ledubkk.com">
						<FontAwesomeIcon icon={faEnvelope} />
					</a>
					<a href="https://goo.gl/maps/XJcEeLyfYbk1eFXi6" target="_blank">
						<FontAwesomeIcon icon={faLocationPin} />
					</a>
				</div>
			</div>
		</>
	);
}
