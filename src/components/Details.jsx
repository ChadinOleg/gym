import React from "react";

import { Button, Stack, Typography } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import EquipmentImage from "../assets/icons/equipment.png";
import TargetImage from "../assets/icons/target.png";

const Details = ({ exerciseDetail }) => {
	const { name, target, equipment, bodyPart, gifUrl } = exerciseDetail;

	const extraDetails = [
		{
			icon: BodyPartImage,
			name: bodyPart,
		},
		{
			icon: TargetImage,
			name: target,
		},
		{
			icon: EquipmentImage,
			name: equipment,
		},
	];
	return (
		<Stack
			justifyContent="center"
			gap="60px"
			sx={{
				flexDirection: { lg: "row" },
				p: "20px",
				alignItems: "center",
			}}
		>
			<img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
			<Stack
				gap="60px"
				sx={{
					gap: { lg: "35px", xs: "20px" },
				}}
			>
				<Typography textTransform="capitalize" variant="h4">
					{name}
				</Typography>

				<Typography className="type-text" variant="h6">
					Exercises keep you strong.
					<br />
					{name}
					is one of the best exercises tp target your {target}.It will help you improve
					your mood and gain energy.
				</Typography>
				{extraDetails.map((item, index) => (
					<Stack key={index} direction="row" gap="24px" alignItems={"center"}>
						<Button
							sx={{
								backgroundColor: "#fff2db",
								borderRadius: "50%",
								width: "100px",
								height: "100px",
							}}
						>
							<img src={item.icon} alt="" />
						</Button>
						<Typography textTransform={"capitalize"} variant="h6">
							{item.name}
						</Typography>
					</Stack>
				))}
			</Stack>
		</Stack>
	);
};

export default Details;
