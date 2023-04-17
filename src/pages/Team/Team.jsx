import styles from "./Team.module.css";
import chef from "./images/chef_ton.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Team() {
	return (
		<>
			<div className={styles["main-container"]}>
				<div className={styles["main-heading"]}>Meet the Team</div>
				<div className={styles["inner-container"]}>
					<section className={styles["left-container"]}>
						<div className={styles["img-container-left"]}>
							<img className={styles["left-image"]} src={chef} alt="chef ton" />
						</div>
						<div className={styles["text-container-left"]}>
							<div>
								<h1 className={styles["heading-text"]}>Chef Ton</h1>
								<p className={styles["heading-sub-text"]}>Head Chef & Owner</p>
							</div>

							<p className={styles["body-text-left"]}>
								His passion for cooking started from his youthful years growing up amid delicious home-cooked meals from
								his grandma. He journeyed to the USA to pursue his dream as a chef and graduated top of his class from
								The Culinary Institute of America. Right after graduation, he worked in many Michelin-starred
								restaurants in New York City, including Eleven Madison Park, The Modern, and Jean Georges. He also has a
								passion about wine and received the Certified Sommelier (CS) recognition from the most prestigious
								organization, the Court of Master Sommelier during his time in New York City.
							</p>
							<div className={styles["social-media"]}>
								<a
									className={styles["social-media-link-container"]}
									target="_blank"
									href="https://www.instagram.com/cheftonn/"
								>
									<FontAwesomeIcon className={styles["ig-icon"]} icon={faInstagram} />
									<span className={styles["social-text"]}>Chef Ton</span>
								</a>
							</div>
						</div>
					</section>

					<section className={styles["right-container"]}>
						<div className={styles["text-container-right"]}>
							<div>
								<h1 className={styles["heading-text"]}>Tao</h1>
								<p className={styles["heading-sub-text"]}>Sommelier & Director</p>
							</div>

							<p className={styles["body-text-right"]}>
								His passion for cooking started from his youthful years growing up amid delicious home-cooked meals from
								his grandma. He journeyed to the USA to pursue his dream as a chef and graduated top of his class from
								The Culinary Institute of America. Right after graduation, he worked in many Michelin-starred
								restaurants in New York City, including Eleven Madison Park, The Modern, and Jean Georges. He also has a
								passion about wine and received the Certified Sommelier (CS) recognition from the most prestigious
								organization, the Court of Master Sommelier during his time in New York City.
							</p>
							<div className={styles["social-media"]}>
								<a
									className={styles["social-media-link-container"]}
									target="_blank"
									href="https://www.instagram.com/cheftonn/"
								>
									<FontAwesomeIcon className={styles["ig-icon"]} icon={faInstagram} />
									<span className={styles["social-text"]}>Chef Ton</span>
								</a>
							</div>
						</div>
						<div className={styles["img-container-right"]}>
							<img className={styles["right-image"]} src={chef} alt="chef ton" />
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
