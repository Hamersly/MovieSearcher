import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatSelector, movieSelector } from "../store/movieLayer/selectors";
import { Movie } from "./Movie";
import { getContentList } from "../store/movieLayer/actions";
import Pagination from "@mui/material/Pagination";

export const MoviesList = () => {
  const movieData = useSelector(movieSelector);
  const movieFormat = useSelector(formatSelector);
  const {page, results } = movieData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContentList({ format: movieFormat, page: movieData.page }));
  }, []);

  const handleChange = (event: object, value: number) => {
    dispatch(getContentList({ format: movieFormat, page: value }));
  };

  return (
    <Container maxWidth="lg">
      {results && results.map((result: any) => <Movie format={movieFormat} result={result} key={result.id} />)}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "35px",
        }}
      >
        <Pagination count={500} siblingCount={0} onChange={handleChange} />
      </Box>
    </Container>
  );
};
