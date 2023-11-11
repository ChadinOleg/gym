// React
import React, { useEffect, useState } from "react";
// Router
import { useParams } from "react-router-dom";
// MUI
import { Box } from "@mui/material";
// Util
import { exercisesOptions, fetchData, youtubeOptions } from "../utils/fetchData";
// Components
import Details from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetails = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const [exerciseVideos, setExerciseVideos] = useState([]);
	const [target, setTarget] = useState([]);
	const [equipment, setEquipment] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		const exercisesFetchData = async () => {
			const exercisesDBUrl = "https://exercisedb.p.rapidapi.com";
			const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
			const exerciseDetailData = await fetchData(
				`${exercisesDBUrl}/exercises/exercise/${id}`,
				exercisesOptions
			);
			setExerciseDetail(exerciseDetailData);

			const exerciseVideosData = await fetchData(
				`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
				youtubeOptions
			);
			setExerciseVideos(exerciseVideosData.contents);

			const targetMuscleData = await fetchData(
				`${exercisesDBUrl}/exercises/target/${exerciseDetailData.target}?limit=210`,
				exercisesOptions
			);
			setTarget(targetMuscleData);
			const equipmentData = await fetchData(
				`${exercisesDBUrl}/exercises/equipment/${exerciseDetailData.equipment}?limit=210`,
				exercisesOptions
			);
			setEquipment(equipmentData);
		};
		exercisesFetchData();
	}, [id]);
	if (!exerciseDetail) return <div>No Data</div>;
	return (
		<Box>
			<Details exerciseDetail={exerciseDetail} />
			<ExerciseVideos
				exerciseVideos={exerciseVideos}
				exerciseName={exerciseDetail.name}
			/>
			<SimilarExercises target={target} equipment={equipment} />
		</Box>
	);
};

export default ExerciseDetails;
