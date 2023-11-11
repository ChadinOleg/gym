import React, { useEffect, useState } from "react";
import { exercisesOptions, fetchData } from "../utils/fetchData";

import { Box, Pagination, Stack, Typography } from "@mui/material";

import ExerciseCard from "./ExerciseCard";
const Exercises = ({ exercises, setExercises, setBodyPart, bodyPart }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const exercisesPerPage = 9;

	const paginate = (e, value) => {
		setCurrentPage(value);

		window.scrollTo({
			top: 1800,
			behavior: "smooth",
		});
	};

	useEffect(
		() => {
			const fetchExerciseData = async () => {
				let exercisesData = [];
				if (bodyPart === "all") {
					exercisesData = await fetchData(
						"https://exercisedb.p.rapidapi.com/exercises?limit=210",
						exercisesOptions
					);
				} else {
					exercisesData = await fetchData(
						`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=10`,
						exercisesOptions
					);
				}

				setExercises(exercisesData);
			};
			fetchExerciseData();
		},
		// eslint-disable-next-line
		[bodyPart]
	);

	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
	const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
	return (
		<Box
			id="exercises"
			sx={{ mt: { lg: "110px" } }}
			mt="50px"
			p="25
		px"
		>
			<Typography variant="h3" mb="46px">
				Showing Results
			</Typography>
			<Stack
				direction="row"
				sx={{ gap: { lg: "110px", xs: "50px" } }}
				flexWrap="wrap"
				justifyContent="center"
			>
				{currentExercise.map((exercise, index) => (
					<ExerciseCard exercise={exercise} key={index} />
				))}
			</Stack>
			<Stack mt="100px" alignItems="center">
				{exercises.length > 9 && (
					<Pagination
						color="standard"
						shape="rounded"
						defaultPage={1}
						count={Math.ceil(exercises.length / exercisesPerPage)}
						size="large"
						page={currentPage}
						onChange={paginate}
					/>
				)}
			</Stack>
		</Box>
	);
};

export default Exercises;
