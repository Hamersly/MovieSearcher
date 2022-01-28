import Box from "@mui/material/Box";
import React from "react";
import {MoviesList} from "../components/MoviesList";

export const MoviePage = () => {
	const format:string = "movie"

	return (
		<Box>
			<MoviesList format={format}/>
		</Box>
	);
};
