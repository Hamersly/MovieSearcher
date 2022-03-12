import React from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

export const Footer = () => {
	return (

		<footer>
			<Box sx={{
				display: "flex",
				backgroundColor: "gray",
				height: "100px",
				alignItems: "center",
				justifyContent: "center"
			}}>
				<Typography variant="subtitle1">
					Все права защищены, но это не точно...
				</Typography>
			</Box>
		</footer>
	);
};