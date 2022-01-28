import Box from "@mui/material/Box";
import React from "react";
import {MoviesList} from "../components/MoviesList";

export const TvPage = () => {
	const format:string = "tv"

	return (
		<Box>
			<MoviesList format={format}/>
		</Box>
	);
};