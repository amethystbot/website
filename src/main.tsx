import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Commands from "./routes/Commands";
import Terms from "./routes/Terms";
import Privacy from "./routes/Privacy";
import NotFound from "./routes/NotFound";

import Navbar from "./components/Navbar";

import { manageTheme } from "./scripts/themeManager";

import "./index.css";

const element: JSX.Element = (
	<BrowserRouter>
		<Navbar />

		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<Home />} />
			<Route path="/commands" element={<Commands />} />
			<Route path="/terms" element={<Terms />} />
			<Route path="/privacy" element={<Privacy />} />
		</Routes>
	</BrowserRouter>
);

ReactDOM.render(element, document.getElementById("root"));

manageTheme();
