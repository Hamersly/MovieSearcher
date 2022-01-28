import {Box, Container} from "@mui/material";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {formatSelector, movieSelector} from "../store/movieLayer/selectors";
import {Movie} from "./Movie";
import {getContentList} from "../store/movieLayer/actions";
import Pagination from "@mui/material/Pagination";

interface Props {
	format: string;
}

export const MoviesList = ({format}: Props) => {
	const movieData = useSelector(movieSelector);
	// console.log(format)
	const {page, results} = movieData;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getContentList({format, page}));
	}, []);

	const handleChange = (event: object, value: number) => {
		dispatch(getContentList({format, page: value}));
	};

	return (
		<Container maxWidth="lg">
			{results && results.map((result: any) => <Movie format={format} result={result} key={result.id}/>)}
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: "35px",
				}}
			>
				<Pagination count={500} siblingCount={0} page={page} onChange={handleChange}/>
			</Box>
		</Container>
	);
};
