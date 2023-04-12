import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./NavLayout.module.css";

export default function NavLayout() {
	return (
		<>
			<div className={styles["wrapper"]}>
				<Navbar />
				<Outlet />
				<div className={styles["footer"]}>
					<Footer />
				</div>
			</div>
		</>
	);
}
