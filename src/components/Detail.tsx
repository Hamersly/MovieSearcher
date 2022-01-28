import React, {useEffect} from "react";
import {Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getMovieDetails} from "../store/movieLayer/actions";
import {detailSelector} from "../store/movieLayer/selectors";
import Typography from "@mui/material/Typography";
import {useParams} from "react-router-dom";

interface Params {
	info: string
}

export const Detail = () => {
	const {info}: Params = useParams();
	const value = info.split("_")
	const format = value[0]
	const id = value[1]

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMovieDetails({format, id}));
	}, []);

	const detail = useSelector(detailSelector);
	const {title, original_title, name, original_name, backdrop_path, overview} = detail

	return (
		<Container maxWidth="lg"
							 sx={{
								 display: "flex",
								 flexDirection: "column",
								 alignItems: "center",
							 }}>
			<Typography variant="h3" component="div">
				{format === "movie" ? title : name}
			</Typography>
			<Typography variant="h5" component="div">
				{format === "movie" ? original_title : original_name}
			</Typography>
			<img
				src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
			/>
			<Typography variant="h5" component="div">
				{overview}
			</Typography>
		</Container>
	);
};