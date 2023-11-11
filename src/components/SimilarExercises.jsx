import React from "react";

import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";
const SimilarExercises = ({ target, equipment }) => {
	return (
		<Box sx={{ mt: { lg: "100px", sx: "0" } }}>
			<Typography variant="h3" mb={5} pl="30px">
				Similar <span style={{ color: "#ff2625" }}>target Muscle </span> exercises
			</Typography>
			<Stack direction="row" sx={{ p: "2", position: "relative" }}>
				{target.length ? <HorizontalScrollBar data={target} /> : <Loader />}
			</Stack>

			<Typography variant="h3" mb={5} pl="30px" mt={20}>
				Similar <span style={{ color: "#ff2625" }}>Equipment</span> exercises
			</Typography>
			<Stack direction="row" sx={{ p: "2", position: "relative" }}>
				{equipment.length ? <HorizontalScrollBar data={equipment} /> : <Loader />}
			</Stack>
		</Box>
	);
};

export default SimilarExercises;
