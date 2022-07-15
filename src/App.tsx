import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Raw from "./pages/Raw";
import Paste from "./pages/Paste";

function App() {
	return (
		<Router>
			<div
				className="container"
				style={{
					display: "flex",
					flexDirection: "column",
					height: "100%",
				}}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:id" element={<Paste />} />
					<Route path="/raw/:id" element={<Raw />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
