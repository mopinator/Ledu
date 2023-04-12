import styles from "./App.module.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavLayout from "./components/Layout/NavLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Menu from "./pages/Menu";
import Team from "./pages/Team";
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<div className={styles[`App`]}>
			{loading ? (
				<div className={styles[`loader-container`]}>
					<div>
						<div>
							<PacmanLoader />
						</div>
						<div className={styles[`loading-text`]}>Loading ..... </div>
					</div>
				</div>
			) : (
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<NavLayout />}>
							<Route index element={<Home />} />
							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
							<Route path="gallery" element={<Gallery />} />
							<Route path="menu" element={<Menu />} />
							<Route path="team" element={<Team />} />
						</Route>
					</Routes>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
