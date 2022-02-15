import {Box, Container} from "@mui/material";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {movieSelector} from "../store/movieLayer/selectors";
import {Movie} from "./Movie";
import {getContentList} from "../store/movieLayer/actions";
import Pagination from "@mui/material/Pagination";
import {Loader} from "./Loader";

interface Props {
	format: string;
}

export const MoviesList = ({format}: Props) => {
	const movieData = useSelector(movieSelector);
	const {page, results, total_pages} = movieData;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getContentList({format, page}));
	}, []);

	const handleChange = (event: object, value: number) => {
		dispatch(getContentList({format, page: value}));
	};

	return (
		<Container maxWidth="lg">
			{results ? results.map((result: any) => <Movie format={format} result={result} key={result.id}/>) :
				<Loader/>}
			{results && <Box
        sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: "35px",
				}}
      >
        <Pagination count={total_pages } siblingCount={0} page={page} onChange={handleChange}/>
      </Box>}
		</Container>
	);
};
