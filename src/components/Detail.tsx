import React, {useEffect} from "react";
import {Box, Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getContentDetails} from "../store/movieLayer/actions";
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
		dispatch(getContentDetails({format, id}));
	}, []);

	const detail = useSelector(detailSelector);
	const {title, original_title, name, original_name, backdrop_path, overview} = detail

	return (
		<Container
			sx={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				marginTop: "30px",
				marginBottom: "30px"
			}}>
			<Typography variant="h3" component="div">
				{format === "movie" ? title : name}
			</Typography>
			<Typography variant="h5" component="div">
				{format === "movie" ? original_title : original_name}
			</Typography>
			<Box sx={{marginTop: "30px"}}>
				<img width="100%"
						 src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
				/>
			</Box>
			<Box sx={{marginTop: "30px"}}>
				<Typography variant="h5" component="div">
					{overview}
				</Typography>
			</Box>
		</Container>
	);
};