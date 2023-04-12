import styles from "./About.module.css";
import restautant from "./images/ledu_placeholder.jpg";
import scallop from "./images/scallop2.jpg";
import local from "./images/chef_ton_local2.jpg";

export default function About() {
	return (
		<>
			<div className={styles["main-container"]}>
				<h1 className={styles["main-heading"]}>Who we are</h1>
				<div className={styles["inner-container"]}>
					<section className={styles["left-container"]}>
						<div className={styles["top-img-container"]}>
							<img className={styles["body-images"]} src={scallop} alt="scallop" />
						</div>
						<div className={styles["text-area-top"]}>
							<h1 className={styles["heading-text-left"]}>Seasonal Modern Thai</h1>
							<p className={styles["body-text"]}>
								Le Du actually comes from a Thai word - “ฤดู”, a synonym for the word “season” in Thai. The name
								reflects an emphasis on our culinary creations out of seasonal produce. Le Du is a modern Thai-inspired
								eatery. We offer 4 courses and tasting menus featuring the extraordinary agricultural bounty of Thailand
								and on the centuries-old culinary cultures that have taken roots here. Our wines are carefully chosen by
								our certified sommelier. The wine list features many unique and intriguing wines from around the world.
							</p>
						</div>
					</section>

					<section className={styles["right-container"]}>
						<div className={styles["text-area-bot"]}>
							<h1 className={styles["heading-text-right"]}>Philosophy</h1>
							<p className={styles["body-text"]}>
								For a very long time, Thai ingredients have been underappreciated. At Le Du, we believe Thailand is one
								among the best places on earth for the finest ingredients. We source only quality ingredients from local
								farmers who grow their amazing produce with love and care. Then, we combine them with modern cooking
								techniques, and turn them into something tastefully fanciful and extraordinary.
							</p>
						</div>

						<div className={styles["bot-img-container"]}>
							<img className={styles["body-images"]} src={local} alt="chef ton local" />
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
