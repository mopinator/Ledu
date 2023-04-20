import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Contact.module.css";
import upstairs04 from "./images/upstairs04.jpg";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
	return (
		<>
			<div className={styles["main-container"]}>
				<div className={styles["inner-container"]}>
					<div className={styles["img-container"]}>
						<img className={styles["upstairs-dinning-area"]} src={upstairs04} />
					</div>
					<div>
						<p className={styles["contact-heading-mobile-view"]}>Contact Information</p>
					</div>
					<div className={styles["text-container"]}>
						<div>
							<p className={styles["contact-heading"]}>Contact Information</p>
						</div>

						<div className={styles["address-container"]}>
							<h4 className={styles["sub-heading"]}>Address</h4>
							<div>
								<p className={styles["address-paragraph"]}>399/3 Silom Soi 7,</p>
								<p className={styles["address-paragraph"]}>Silom, Bangrak</p>
								<p className={styles["address-paragraph"]}>Bangkok 10500</p>
							</div>
							<div className={styles["info"]}>
								<a className={styles["locantion-dot"]} href="https://goo.gl/maps/XJcEeLyfYbk1eFXi6" target="_blank">
									<FontAwesomeIcon icon={faLocationDot} />
									<span className={styles["google-map"]}>Google map</span>
								</a>
							</div>
						</div>

						<div className={styles["inquiries-container"]}>
							<h4 className={styles["sub-heading"]}>Events and general inquiries</h4>
							<div className={styles["info"]}>
								<a className={styles["email"]} href="mailto:info@ledubkk.com" target="_blank">
									info@ledubkk.com
								</a>
							</div>
							<div className={styles["info"]}>
								<a className={styles["phone-number"]} href="tel:+66929199969">
									+66 92 919 9969
								</a>
							</div>
						</div>

						<div className={styles["careers-container"]}>
							<h4 className={styles["sub-heading"]}>Career opportunities</h4>
							<div className={styles["info"]}>
								<a href="" target="_blank">
									careers@email.com
								</a>
							</div>
							<div className={styles["social-media-container"]}>
								<h4 className={styles["sub-heading"]}>Follow us</h4>
								<div className={styles["icons-container"]}>
									<a
										className={styles["social-icons"]}
										href="https://www.facebook.com/LeDuWineBarandrestaurant/"
										target="_blank"
									>
										<FontAwesomeIcon icon={faFacebookF} />
									</a>
									<a className={styles["social-icons"]} href="https://www.instagram.com/ledubkk/" target="_blank">
										<FontAwesomeIcon icon={faInstagram} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
