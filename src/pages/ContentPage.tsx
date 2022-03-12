import Box from "@mui/material/Box";
import React, {useEffect} from "react";
import {ContentList} from "../components/ContentList";
import {contentSelector} from "../store/movieLayer/selectors";
import {useDispatch, useSelector} from "react-redux";
import {getContentList} from "../store/movieLayer/actions";

interface Props {
	format: string;
}

export const ContentPage = ({format}: Props) => {
	const {page, results, total_pages} = useSelector(contentSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getContentList({format, page}));
	}, []);

	const handleChange = (event: object, value: number) => {
		dispatch(getContentList({format, page: value}));
	};

	return (
		<Box>
			<ContentList format={format} page={page} results={results} total_pages={total_pages} handleChange={handleChange}/>
		</Box>
	);
};
