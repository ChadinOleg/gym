//Utilities
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// Components

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Pages

import ExerciseDetails from "./pages/ExerciseDetails";
import Home from "./pages/Home";

// Styles

import "./App.css";

function App() {
	return (
		<Box width="400px" m="auto" sx={{ width: { xl: "1488px" } }}>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/exercise/:id" element={<ExerciseDetails />} />
			</Routes>
			<Footer />
		</Box>
	);
}

export default App;
