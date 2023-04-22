import styles from "./Menu.module.css";
import pic1 from "./images/pic01.png";
import pic2 from "./images/pic02.png";
// import pic3 from "./images/pic03.jpg";
// import pic4 from "./images/pic04.jpg";
export default function Menu() {
	return (
		<>
			<div className={styles["main-container"]}>
				<div className={styles["inner-container"]}>
					<div className={styles["four-course-container"]}>
						<div className={styles["four-course-menu"]}>
							<div className={styles["menu-inner-container-top"]}>
								<h3 className={styles["sub-heading"]}>4 Course</h3>
								<p>Amuse-Bouche</p>

								<div className={styles["menu-option-container-one"]}>
									<p className={styles["menu-option"]}>Banana Prawn | Seaweed | Toasted Chili</p>
									<p className={styles["or"]}>or</p>
									<p className={styles["menu-option"]}>Khao Chae</p>
								</div>

								<div className={styles["menu-option-container-two"]}>
									<p className={styles["menu-option"]}>Golden Snapper | Ant Larvae | Sticky Rice</p>
									<p className={styles["or"]}>or</p>
									<p className={styles["menu-option"]}>Soft-Shell Crab | Southern Rice & Curry</p>
								</div>
								<p>Thai Wagyu | Northern Pepper | Khao-Soi</p>
								<p>Fermented Rice | Marian Plum | Lemon</p>
								<p>Petit Four</p>
								<p>4 Course Menu - 3,490++</p>
								<p>4 Glass Wine Paring - 1,500++</p>
								<p>4 Glass Kombucha Pairing - 800++</p>
								<p>Signature River Prawn - 1,200++</p>
								<footer className={styles["footer"]}>-All prices are subjected to 10% service charge & 7% VAT-</footer>
							</div>
						</div>
						<div className={styles["top-image-container"]}>
							<img className={styles["top-image"]} src={pic1} />
						</div>
					</div>
					<div className={styles["six-course-container"]}>
						<div className={styles["six-course-menu"]}>
							<div className={styles["menu-inner-container-bot"]}>
								<h3 className={styles["sub-heading"]}>6 Course</h3>
								<p>Amuse-Bouche</p>
								<p>Banana Prawn | Seaweed | Toasted Chili</p>
								<p>Khao Chae</p>
								<p>Golden Snapper | Ant Larvae | Sticky Rice</p>
								<p>Soft-Shell Crab | Southern Rice & Curry</p>
								<p>Thai Wagyu | Northern Pepper | Khao-Soi</p>
								<p>Fermented Rice | Marian Plum | Lemon</p>
								<p>Petit Four</p>
								<p>6 Course Menu - 3,990++</p>
								<p>6 Glass Wine Paring - 2,000++</p>
								<p>6 Glass Kombucha Pairing - 100++</p>
								<p>Signature River Prawn - 1,200++</p>
								<footer className={styles["footer"]}>-All prices are subjected to 10% service charge & 7% VAT-</footer>
							</div>
						</div>
						<div className={styles["bot-image-container"]}>
							<img className={styles["bot-image"]} src={pic2} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
