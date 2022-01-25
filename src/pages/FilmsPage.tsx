import Box from "@mui/material/Box";
import React from "react";
import { MoviesList } from "../components/MoviesList";
import { Header } from "../components/Header";

export const FilmsPage = () => {
  return (
    <Box>
      <Header />
      <MoviesList />
    </Box>
  );
};
