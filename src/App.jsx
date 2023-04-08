import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavLayout from "./components/Layout/NavLayout";
import About from "./pages/About";
import Awards from "./pages/Awards";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Menu from "./pages/Menu";
import Team from "./pages/Team";

function App() {
	return (
		<div className={styles.App}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<NavLayout />}>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="awards" element={<Awards />} />
						<Route path="contact" element={<Contact />} />
						<Route path="gallery" element={<Gallery />} />
						<Route path="menu" element={<Menu />} />
						<Route path="team" element={<Team />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
