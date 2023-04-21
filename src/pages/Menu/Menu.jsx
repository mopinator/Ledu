import styles from "./Menu.module.css";
import { menuData } from "./data";

export default function Menu() {
	return (
		<>
			<div className={styles["main-container"]}>
				<div className={styles["inner-container"]}>
					<div className={styles["four-course-container"]}>
						<div className={styles["four-course-menu"]}>
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
						</div>
						<div className={styles["four-course-price"]}>
							<p>4 Course Menu - 3,490++</p>

							<p>4 Glass Wine Paring - 1,500++</p>

							<p>4 Glass Kombucha Pairing - 800++</p>

							<p>Signature River Prawn - 1,200++</p>

							<p className={styles["footer"]}>-All prices are subjected to 10% service charge & 7% VAT-</p>
						</div>
					</div>
					<div className={styles["six-course-container"]}>
						<div className={styles["six-course-menu"]}>
							<h3 className={styles["sub-heading"]}>6 Course</h3>
							<p>Amuse-Bouche</p>

							<p>Banana Prawn | Seaweed | Toasted Chili</p>

							<p>Khao Chae</p>

							<p>Golden Snapper | Ant Larvae | Sticky Rice</p>

							<p>Soft-Shell Crab | Southern Rice & Curry</p>

							<p>Thai Wagyu | Northern Pepper | Khao-Soi</p>

							<p>Fermented Rice | Marian Plum | Lemon</p>

							<p>Petit Four</p>
						</div>
						<div className={styles["six-course-price"]}>
							<p>6 Course Menu - 3,990++</p>

							<p>6 Glass Wine Paring - 2,000++</p>

							<p>6 Glass Kombucha Pairing - 100++</p>

							<p>Signature River Prawn - 1,200++</p>

							<p className={styles["footer"]}>-All prices are subjected to 10% service charge & 7% VAT-</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
