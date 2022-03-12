import {Box, Container} from "@mui/material";
import React from "react";
import {ContentUnit} from "./ContentUnit";
import Pagination from "@mui/material/Pagination";
import {Loader} from "./Loader";

interface Props {
	format: string;
	page: number;
	results: any;
	total_pages: number;
	handleChange: any;
}

export const ContentList = ({format, page, results, total_pages, handleChange}: Props) => {

	return (
		<Container maxWidth="lg">
			{results ? results.map((result: any) => <ContentUnit format={format} result={result} key={result.id}/>) :
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
