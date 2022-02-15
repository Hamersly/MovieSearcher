import {Box, Container} from "@mui/material";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchListSelector, searchQuerySelector} from "../store/movieLayer/selectors";
import {Movie} from "./Movie";
import {searchValue} from "../store/movieLayer/actions";
import Pagination from "@mui/material/Pagination";
import {Loader} from "./Loader";


export const SearchList = () => {
	const searchData = useSelector(searchListSelector);
	const {page, results, total_pages} = searchData;
	const query = useSelector(searchQuerySelector)
	const dispatch = useDispatch();

	console.log(query)

	useEffect(() => {
		dispatch(searchValue({query, page}));
	}, []);

	const handleChange = (event: object, value: number) => {
		dispatch(searchValue({query, page: value}));
	};

	return (
		<Container maxWidth="lg">
			{results ? results.map((result: any) => <Movie format={"movie"} result={result} key={result.id}/>) :
				<Loader/>}
			{results && <Box
        sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: "35px",
				}}
      >
        <Pagination count={total_pages} siblingCount={0} page={page} onChange={handleChange}/>
      </Box>}
		</Container>
	);
};
