import {Box} from "@mui/material";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchListSelector, searchQuerySelector} from "../store/movieLayer/selectors";
import {ContentList} from "../components/ContentList";
import {searchValue} from "../store/movieLayer/actions";

export const SearchPage = () => {
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
		<Box>
			<ContentList format={"movie"} page={page} results={results} total_pages={total_pages}
									 handleChange={handleChange}/>
		</Box>
	);
};
